import { inject, Injectable } from '@angular/core';
import { commonQuestions } from '@shared/db/common.questions';
import { nurseAnesthetistQuestions } from '@shared/db/nurse-anesthetist.questions';
import type { Question, TestOption, TestResult } from '@shared/entities/shared.types';
import { BehaviorSubject } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class StoreService {
	private readonly localStorageService = inject(LocalStorageService);

	private readonly selectedTestSubject$ = new BehaviorSubject<TestOption | null>(null);
	private readonly testQuestionsSubject$ = new BehaviorSubject<Question[] | null>(null);
	private readonly testResultsSubject$ = new BehaviorSubject(new Map<number, TestResult>());

	public readonly selectedTest$ = this.selectedTestSubject$.asObservable();
	public readonly testQuestions$ = this.testQuestionsSubject$.asObservable();
	public readonly testResults$ = this.testResultsSubject$.asObservable();

	public setSelectedTest(test: TestOption | null): void {
		this.selectedTestSubject$.next(test);
		this.localStorageService.set('selectedTest', this.selectedTestSubject$.value);

		this.setTestQuestions(test);
	}

	public setTestResult(testResult: TestResult): void {
		const testResults = this.testResultsSubject$.value;

		testResults.set(testResult.questionId, {
			userAnswers: testResult.userAnswers,
			answers: testResult.answers,
			testName: testResult.testName,
			questionId: testResult.questionId,
			testQuestions: testResult.testQuestions,
			selectedTest: testResult.selectedTest,
		});

		this.testResultsSubject$.next(testResults);
		this.localStorageService.set('testResults', this.testResultsSubject$.value);
	}

	public clearTestResults(): void {
		this.testResultsSubject$.next(new Map<number, TestResult>());
		this.localStorageService.set('testResults', this.testResultsSubject$.value);
	}

	private setTestQuestions(test: TestOption | null): void {
		if (test === null) {
			this.testQuestionsSubject$.next(null);
		} else {
			switch (test.value) {
				case 'common':
					this.testQuestionsSubject$.next(commonQuestions);

					break;

				case 'nurseAnesthetist':
					this.testQuestionsSubject$.next(nurseAnesthetistQuestions);

					break;

				default:
					break;
			}
		}

		this.localStorageService.set('testQuestions', this.testQuestionsSubject$.value);
	}

	public restoreData(): void {
		const selectedTest = this.localStorageService.get<TestOption>('selectedTest');
		const testQuestions = this.localStorageService.get<Question[]>('testQuestions');
		const testResults = this.localStorageService.get<Map<number, TestResult>>('testResults');

		if (selectedTest !== null) {
			this.selectedTestSubject$.next(selectedTest);
		}

		if (testQuestions !== null) {
			this.testQuestionsSubject$.next(testQuestions);
		}

		if (testResults !== null) {
			this.testResultsSubject$.next(testResults);
		}
	}
}
