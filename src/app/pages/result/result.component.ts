import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import type { ModalQuestionData, Question, TableConfig, TestResult } from '@shared/entities/shared.types';
import { QuestionModalComponent } from '@shared/modals/question/question.component';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { StoreService } from '@shared/services/store.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { NzTableModule } from 'ng-zorro-antd/table';

type TableData = Question & {
	status: '-' | 'Без ответа' | 'Верно' | 'Неправильно' | 'Частично верно';
	score: number | null;
};

@Component({
	selector: 'app-result-page',
	templateUrl: './result.component.html',
	styleUrl: './result.component.scss',
	imports: [NzDividerModule, NzTableModule, NzButtonModule, NzIconModule, DecimalPipe, NzModalModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ResultPageComponent {
	private readonly router = inject(Router);
	private readonly nzModalService = inject(NzModalService);
	private readonly storeService = inject(StoreService);
	private readonly localStorageService = inject(LocalStorageService);

	protected readonly userAnswers = toSignal(this.storeService.testResults$, {
		initialValue: null,
	});

	private readonly getFirstAnswer = computed(() => {
		const userAnswers = this.userAnswers();

		if (userAnswers === null) {
			return null;
		}

		const values = [...userAnswers.values()];

		return values.at(0) ?? null;
	});

	protected readonly testName = computed(() => {
		return this.getFirstAnswer()?.testName ?? null;
	});

	protected readonly questions = computed(() => {
		return this.getFirstAnswer()?.testQuestions ?? [];
	});

	protected readonly userCountAnswers = computed(() => {
		const userAnswers = this.userAnswers();

		if (userAnswers === null) {
			return 0;
		}

		const answers: number[] = [];

		for (const [key, value] of userAnswers) {
			if (value.answers.length > 0) {
				answers.push(key);
			}
		}

		return answers.length;
	});

	protected readonly tableData = computed(() => {
		const questions = this.questions();
		const userAnswers = this.userAnswers();

		const mappedResult = questions.map<TableData>((question) => {
			if (userAnswers === null) {
				return {
					...question,
					status: '-',
					score: null,
				};
			}

			const userResult = userAnswers.get(question.id) ?? null;

			if (userResult === null || userResult.answers.length === 0) {
				return {
					...question,
					status: 'Без ответа',
					score: 0,
				};
			}

			const isAllCorrect = userResult.userAnswers.every((a) => {
				return a.userChoice === a.isCorrect;
			});

			const isPartiallyCorrect = userResult.userAnswers.some((a) => {
				return a.userChoice && a.isCorrect;
			});

			return {
				...question,
				status: isAllCorrect
					? 'Верно'
					: question.isMultiple
						? isPartiallyCorrect
							? 'Частично верно'
							: 'Неправильно'
						: 'Неправильно',
				score: isAllCorrect
					? 1
					: question.isMultiple
						? isPartiallyCorrect
							? this.calculateCorrectScore(userResult.userAnswers)
							: 0
						: 0,
			};
		});

		return mappedResult;
	});

	protected readonly myScore = computed(() => {
		const tableData = this.tableData();

		return tableData.reduce((acc, curr) => {
			if (curr.score === null) {
				return acc;
			}

			return acc + curr.score;
		}, 0);
	});

	protected readonly tableConfig: Array<TableConfig<TableData>> = [
		{
			name: 'Номер вопроса',
			dataProperty: 'id',
			showSort: true,
			sortDirections: ['ascend', 'descend'],
			sortOrder: 'ascend',
			sortFn: (a, b) => {
				return a.id - b.id;
			},
			width: '150px',
		},
		{
			name: 'Состояние',
			dataProperty: 'status',
			showFilter: true,
			filterMultiple: true,
			filters: [
				{ text: '-', value: '-' },
				{ text: 'Без ответа', value: 'Без ответа' },
				{ text: 'Верно', value: 'Верно' },
				{ text: 'Неправильно', value: 'Неправильно' },
				{ text: 'Частично верно', value: 'Частично верно' },
			],
			filterFn: (status: Array<TableData['status']> | TableData['status'], row) => {
				if (Array.isArray(status)) {
					return status.some((s) => {
						return row.status === s;
					});
				}

				return row.status === status;
			},
		},
		{
			name: 'Балл',
			dataProperty: 'score',
			width: '70px',
			align: 'center',
		},
		{
			name: '',
			cellType: 'action',
			align: 'center',
			width: '0',
		},
	];

	protected showQuestion(questionId: number): void {
		const questions = this.questions();
		const userAnswers = this.userAnswers();

		const question =
			questions.find((q) => {
				return q.id === questionId;
			}) ?? null;

		let questionUserAnswer: TestResult | null = null;

		if (userAnswers !== null && question !== null) {
			questionUserAnswer = userAnswers.get(question.id) ?? null;
		}

		this.nzModalService.create<QuestionModalComponent, ModalQuestionData, void>({
			nzTitle: `№${questionId} ${question?.question ?? ''}`,
			nzContent: QuestionModalComponent,
			nzData: { question, questionUserAnswer },
			nzFooter: null,
			nzWidth: 'clamp(200px, 80vw, 1000px)',
		});
	}

	protected finishQuiz(): void {
		void this.router.navigateByUrl(`/${ROUTER_LINKS.start}`);
		this.storeService.clearTestResults();
	}

	protected toQuiz(): void {
		const firstQuestion = this.questions().at(0) ?? null;

		this.storeService.setSelectedTest(this.getFirstAnswer()?.selectedTest ?? null);

		if (firstQuestion !== null) {
			void this.router.navigateByUrl(`/${ROUTER_LINKS.quiz}/${firstQuestion.id}`);
		}
	}

	private calculateCorrectScore(answers: TestResult['userAnswers']): number {
		if (!Array.isArray(answers) || answers.length === 0) {
			return 0;
		}

		let correctCount = 0;

		for (const answer of answers) {
			if (answer.userChoice && answer.isCorrect) {
				correctCount += 1;
			}
		}

		if (correctCount === 0) {
			return 0;
		}

		const score = correctCount / answers.length;

		return Number(score.toFixed(2));
	}
}
