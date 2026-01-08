import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { MappedQuestion, TestResult } from '@shared/entities/shared.types';
import { IsDisabledPipe } from '@shared/pipes/is-disabled.pipe';
import { StoreService } from '@shared/services/store.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
	selector: 'app-question',
	templateUrl: './question.component.html',
	styleUrl: './question.component.scss',
	imports: [
		NzDividerModule,
		NzEmptyModule,
		NzButtonModule,
		NzIconModule,
		ReactiveFormsModule,
		NzRadioModule,
		NzCheckboxModule,
		IsDisabledPipe,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent {
	private readonly storeService = inject(StoreService);

	public readonly questionId = input.required<number>();

	protected readonly selectedTestOption = this.storeService.selectedTest;
	protected readonly testQuestions = this.storeService.testQuestions;
	private readonly userAnswers = this.storeService.testResults;

	protected readonly isAnswerVisible = signal(false);

	protected readonly question = computed(() => {
		const questionId = this.questionId();
		const questions = this.testQuestions() ?? [];

		const question = questions.find((q) => {
			return q.id === questionId;
		});

		return question ?? null;
	});

	protected readonly questionFormControl = new FormControl<number[] | number | null>(null);

	constructor() {
		effect(() => {
			const question = this.question();

			if (question !== null) {
				this.addInitFormControlValue(question);
			}

			this.isAnswerVisible.set(false);
		});

		this.questionFormControl.valueChanges.pipe(takeUntilDestroyed()).subscribe(() => {
			this.addAnswerToStore();
		});
	}

	protected changeAnswerVisibility(): void {
		this.isAnswerVisible.set(!this.isAnswerVisible());
	}

	protected clearAnswers(): void {
		this.questionFormControl.setValue(null);
	}

	private addInitFormControlValue(question: MappedQuestion): void {
		const userAnswers = this.userAnswers().get(question.id) ?? null;

		if (userAnswers === null) {
			this.questionFormControl.setValue(null);
		} else {
			const answers = userAnswers.answers;

			if (answers.length === 0) {
				this.questionFormControl.setValue(null);
			} else {
				this.questionFormControl.setValue(question.isMultiple ? answers : answers[0]);
			}
		}
	}

	private addAnswerToStore(): void {
		const formValue = this.questionFormControl.getRawValue() ?? [];
		const userAnswers = Array.isArray(formValue) ? formValue : [formValue];
		const question = this.question();

		if (question !== null) {
			const userAnswer: TestResult = {
				userAnswers: question.answers.map((answer) => {
					return {
						id: answer.id,
						isCorrect: answer.isCorrect,
						isUserChoiceCorrect: userAnswers.includes(answer.id),
					};
				}),
				answers: userAnswers,
			};

			this.storeService.setTestResult(question.id, userAnswer);
		}
	}
}
