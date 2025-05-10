import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import type { ModalQuestionData } from '@shared/entities/shared.types';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_MODAL_DATA } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@Component({
	selector: 'app-question-modal',
	templateUrl: './question.component.html',
	styleUrl: './question.component.scss',
	imports: [NzEmptyModule, NzRadioModule, NzCheckboxModule, ReactiveFormsModule, NzIconModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionModalComponent implements OnInit {
	protected readonly nzModalData = inject<ModalQuestionData>(NZ_MODAL_DATA);

	protected readonly isAnswerVisible = signal(false);

	protected readonly questionFormControl = new FormControl<number[] | number | null>(null);

	public ngOnInit(): void {
		if (this.nzModalData.question !== null) {
			this.addInitFormControlValue(this.nzModalData.questionUserAnswer, this.nzModalData.question.isMultiple);
		}
	}

	protected changeAnswerVisibility(): void {
		this.isAnswerVisible.set(!this.isAnswerVisible());
	}

	private addInitFormControlValue(
		questionUserAnswer: ModalQuestionData['questionUserAnswer'],
		isMultiple: boolean
	): void {
		if (questionUserAnswer === null) {
			this.questionFormControl.setValue(null);
		} else {
			const answers = questionUserAnswer.answers;

			if (answers.length === 0) {
				this.questionFormControl.setValue(null);
			} else {
				this.questionFormControl.setValue(isMultiple ? answers : answers[0]);
			}
		}
	}
}
