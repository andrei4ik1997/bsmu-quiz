import { inject, Injectable } from '@angular/core';
import { commonQuestions } from '@shared/db/common.questions';
import { nurseAnesthetistQuestions } from '@shared/db/nurse-anesthetist.questions';
import { LOCAL_STORAGE_KEYS } from '@shared/entities/shared.constants';
import type { MappedQuestion, Question, TestOption, TestResult } from '@shared/entities/shared.types';
import { BehaviorSubject } from 'rxjs';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class StoreService {
	private readonly localStorageService = inject(LocalStorageService);

	private readonly selectedTestSubject$ = new BehaviorSubject<TestOption | null>(null);
	private readonly testQuestionsSubject$ = new BehaviorSubject<MappedQuestion[] | null>(null);
	private readonly testResultsSubject$ = new BehaviorSubject(new Map<number, TestResult>());
	private readonly currentQuestionIndexSubject$ = new BehaviorSubject(0);

	public readonly selectedTest$ = this.selectedTestSubject$.asObservable();
	public readonly testQuestions$ = this.testQuestionsSubject$.asObservable();
	public readonly testResults$ = this.testResultsSubject$.asObservable();
	public readonly currentQuestionIndex$ = this.currentQuestionIndexSubject$.asObservable();

	public setSelectedTest(test: TestOption | null): void {
		this.selectedTestSubject$.next(test);
		this.localStorageService.set(LOCAL_STORAGE_KEYS.selectedTest, this.selectedTestSubject$.value);

		this.setTestQuestions(test);
	}

	public setTestResult(questionId: number, testResult: TestResult): void {
		const testResults = this.testResultsSubject$.value;

		testResults.set(questionId, {
			userAnswers: testResult.userAnswers,
			answers: testResult.answers,
		});

		this.testResultsSubject$.next(testResults);
		this.localStorageService.set(LOCAL_STORAGE_KEYS.testResults, this.testResultsSubject$.value);
	}

	public clearTestResults(): void {
		this.testResultsSubject$.next(new Map<number, TestResult>());
		this.localStorageService.set(LOCAL_STORAGE_KEYS.testResults, this.testResultsSubject$.value);
	}

	private setTestQuestions(test: TestOption | null): void {
		if (test === null) {
			this.testQuestionsSubject$.next(null);
		} else {
			switch (test.value) {
				case 'common':
					this.testQuestionsSubject$.next(this.randomizeQuestions(commonQuestions));

					break;

				case 'nurseAnesthetist':
					this.testQuestionsSubject$.next(this.randomizeQuestions(nurseAnesthetistQuestions));

					break;

				default:
					break;
			}
		}

		this.localStorageService.set(LOCAL_STORAGE_KEYS.testQuestions, this.testQuestionsSubject$.value);
	}

	private randomizeQuestions(questions: Question[]): MappedQuestion[] {
		const copyQuestions = JSON.parse(JSON.stringify(questions)) as Question[];

		let currentIndex = copyQuestions.length;

		while (currentIndex !== 0) {
			// eslint-disable-next-line sonarjs/pseudo-random
			const randomIndex = Math.floor(Math.random() * currentIndex);

			currentIndex--;

			[copyQuestions[currentIndex], copyQuestions[randomIndex]] = [
				copyQuestions[randomIndex],
				copyQuestions[currentIndex],
			];
		}

		return copyQuestions.map<MappedQuestion>((question, index) => {
			return {
				...question,
				index,
			} satisfies MappedQuestion;
		});
	}

	public restoreData(): void {
		const selectedTest = this.localStorageService.get<TestOption>(LOCAL_STORAGE_KEYS.selectedTest);
		const testQuestions = this.localStorageService.get<MappedQuestion[]>(LOCAL_STORAGE_KEYS.testQuestions);
		const testResults = this.localStorageService.get<Map<number, TestResult>>(LOCAL_STORAGE_KEYS.testResults);
		const currentQuestionIndex = this.localStorageService.get<number>(LOCAL_STORAGE_KEYS.currentQuestionIndex);

		if (selectedTest !== null) {
			this.selectedTestSubject$.next(selectedTest);
		}

		if (testQuestions !== null) {
			this.testQuestionsSubject$.next(testQuestions);
		}

		if (testResults !== null) {
			this.testResultsSubject$.next(testResults);
		}

		if (currentQuestionIndex !== null) {
			this.currentQuestionIndexSubject$.next(currentQuestionIndex);
		}
	}

	public clearData(): void {
		this.clearTestResults();
		this.setSelectedTest(null);
		this.setCurrentQuestionIndex(0);
	}

	public setCurrentQuestionIndex(index: number): void {
		this.currentQuestionIndexSubject$.next(index);
		this.localStorageService.set(LOCAL_STORAGE_KEYS.currentQuestionIndex, this.currentQuestionIndexSubject$.value);
	}
}
