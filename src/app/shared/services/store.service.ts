import { inject, Injectable, signal } from '@angular/core';
import { COMMON_07_01_2026_QUESTIONS } from '@shared/db/common-07-01-2026.questions';
import { COMMON_2025_QUESTIONS } from '@shared/db/common-2025.questions';
import { nurseAnesthetistQuestions } from '@shared/db/nurse-anesthetist.questions';
import { LOCAL_STORAGE_KEYS } from '@shared/entities/shared.constants';
import type { MappedQuestion, Question, TestOption, TestResult } from '@shared/entities/shared.types';

import { LocalStorageService } from './local-storage.service';

@Injectable()
export class StoreService {
	private readonly localStorageService = inject(LocalStorageService);

	private readonly selectedTestStore = signal<TestOption | null>(null);
	private readonly testQuestionsStore = signal<MappedQuestion[] | null>(null);
	private readonly testResultsStore = signal(new Map<number, TestResult>());
	private readonly currentQuestionIndexStore = signal(0);

	public readonly selectedTest = this.selectedTestStore.asReadonly();
	public readonly testQuestions = this.testQuestionsStore.asReadonly();
	public readonly testResults = this.testResultsStore.asReadonly();
	public readonly currentQuestionIndex = this.currentQuestionIndexStore.asReadonly();

	public setSelectedTest(test: TestOption | null): void {
		this.selectedTestStore.set(test);
		this.localStorageService.set(LOCAL_STORAGE_KEYS.selectedTest, this.selectedTestStore());

		this.setTestQuestions(test);
	}

	public setTestResult(questionId: number, testResult: TestResult): void {
		const testResults = this.testResultsStore();

		testResults.set(questionId, {
			userAnswers: testResult.userAnswers,
			answers: testResult.answers,
		});

		this.testResultsStore.set(testResults);
		this.localStorageService.set(LOCAL_STORAGE_KEYS.testResults, this.testResultsStore());
	}

	public clearTestResults(): void {
		this.testResultsStore.set(new Map<number, TestResult>());
		this.localStorageService.set(LOCAL_STORAGE_KEYS.testResults, this.testResultsStore());
	}

	private setTestQuestions(test: TestOption | null): void {
		if (test === null) {
			this.testQuestionsStore.set(null);
		} else {
			switch (test.value) {
				case 'common_2025':
					this.testQuestionsStore.set(this.randomizeQuestions(COMMON_2025_QUESTIONS));
					break;

				case 'common_07_01_2026':
					this.testQuestionsStore.set(this.randomizeQuestions(COMMON_07_01_2026_QUESTIONS));
					break;

				case 'nurseAnesthetist':
					this.testQuestionsStore.set(this.randomizeQuestions(nurseAnesthetistQuestions));
					break;

				default:
					break;
			}
		}

		this.localStorageService.set(LOCAL_STORAGE_KEYS.testQuestions, this.testQuestionsStore());
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
			this.selectedTestStore.set(selectedTest);
		}

		if (testQuestions !== null) {
			this.testQuestionsStore.set(testQuestions);
		}

		if (testResults !== null) {
			this.testResultsStore.set(testResults);
		}

		if (currentQuestionIndex !== null) {
			this.currentQuestionIndexStore.set(currentQuestionIndex);
		}
	}

	public clearData(): void {
		this.clearTestResults();
		this.setSelectedTest(null);
		this.setCurrentQuestionIndex(0);
	}

	public setCurrentQuestionIndex(index: number): void {
		this.currentQuestionIndexStore.set(index);
		this.localStorageService.set(LOCAL_STORAGE_KEYS.currentQuestionIndex, this.currentQuestionIndexStore());
	}
}
