import { Injectable } from '@angular/core';
import { commonQuestions } from '@shared/db/common.questions';
import { nurseAnesthetistQuestions } from '@shared/db/nurse-anesthetist.questions';
import type { Question, TestOption, TestResult } from '@shared/entities/shared.types';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class StoreService {
	private readonly selectedTestSubject$ = new BehaviorSubject<TestOption | null>(null);
	private readonly testQuestionsSubject$ = new BehaviorSubject<Question[] | null>(null);
	private readonly testResultsSubject$ = new BehaviorSubject(new Map<number, TestResult>());

	public readonly selectedTest$ = this.selectedTestSubject$.asObservable();
	public readonly testQuestions$ = this.testQuestionsSubject$.asObservable();
	public readonly testResults$ = this.testResultsSubject$.asObservable();

	public setSelectedTest(test: TestOption | null): void {
		this.selectedTestSubject$.next(test);
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
		});

		this.testResultsSubject$.next(testResults);
	}

	public clearTestResults(): void {
		this.testResultsSubject$.next(new Map<number, TestResult>());
	}

	private setTestQuestions(test: TestOption | null): void {
		if (test === null) {
			this.testQuestionsSubject$.next(null);

			return;
		}

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
}
