import type { OnDestroy } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { Question, TestResult } from '@shared/entities/shared.types';
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
export class QuestionComponent implements OnDestroy {
	private readonly storeService = inject(StoreService);

	public readonly questionId = input<string | undefined>(undefined, { alias: 'id' }); // router id

	protected readonly selectedTestOption = toSignal(this.storeService.selectedTest$, { initialValue: null });
	protected readonly testQuestions = toSignal(this.storeService.testQuestions$, { initialValue: null });
	private readonly userAnswers = toSignal(this.storeService.testResults$, {
		initialValue: new Map<number, TestResult>(),
	});

	protected readonly isAnswerVisible = signal(false);

	protected readonly question = computed(() => {
		const questionId = this.questionId();

		if (questionId === undefined) {
			return null;
		}

		const questions = this.testQuestions() ?? [];
		const question = questions.find((q) => {
			return String(q.id) === questionId;
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

	private addInitFormControlValue(question: Question): void {
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
				questionId: question.id,
				userAnswers: question.answers.map((answer) => {
					return {
						...answer,
						userChoice: userAnswers.includes(answer.id),
					};
				}),
				answers: userAnswers,
				testName: this.selectedTestOption()?.title ?? '',
				testQuestions: this.testQuestions() ?? [],
			};

			this.storeService.setTestResult(userAnswer);
		}
	}

	public ngOnDestroy(): void {
		this.addAnswerToStore();
	}
}
