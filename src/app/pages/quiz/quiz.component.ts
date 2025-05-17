import type { ElementRef } from '@angular/core';
import { ChangeDetectionStrategy, Component, computed, inject, linkedSignal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import { QuestionComponent } from '@shared/components/question/question.component';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import type { Question, TestResult } from '@shared/entities/shared.types';
import { IsHaveAnswerPipe } from '@shared/pipes/is-have-answer.pipe';
import { StoreService } from '@shared/services/store.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';

@Component({
	selector: 'app-quiz-page',
	templateUrl: './quiz.component.html',
	styleUrl: './quiz.component.scss',
	imports: [NzButtonModule, NzEmptyModule, NzIconModule, NzModalModule, IsHaveAnswerPipe, QuestionComponent],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class QuizPageComponent {
	private readonly storeService = inject(StoreService);
	private readonly router = inject(Router);
	private readonly nzModalService = inject(NzModalService);

	protected readonly selectedTestOption = toSignal(this.storeService.selectedTest$, { initialValue: null });
	protected readonly testQuestions = toSignal(this.storeService.testQuestions$, { initialValue: null });
	protected readonly userAnswers = toSignal(this.storeService.testResults$, {
		initialValue: new Map<number, TestResult>(),
	});

	protected readonly currentQuestionIndex = linkedSignal<number>(() => {
		const testQuestions = this.testQuestions();

		if (testQuestions !== null) {
			return testQuestions[0].id;
		}

		return 0;
	});

	private readonly quizContainerElement = viewChild<ElementRef<HTMLDivElement>>('quizContainer');

	protected readonly question = computed(() => {
		const questions = this.testQuestions() ?? [];
		const question = questions.find((q) => {
			return q.id === this.currentQuestionIndex();
		});

		return question ?? null;
	});

	protected changeCurrentQuestionIndex(index: number): void {
		this.currentQuestionIndex.set(index);
		this.scroll();
	}

	protected completeQuiz(questions: Question[]): void {
		const userAnswers: number[] = [];

		for (const [key, value] of this.userAnswers()) {
			if (value.answers.length > 0) {
				userAnswers.push(key);
			}
		}

		this.nzModalService.confirm({
			nzTitle: 'Вы хотите завершить тест?',
			nzContent: `Вы ответили на ${userAnswers.length} из ${questions.length} вопросов`,
			nzCancelText: 'Закрыть',
			nzOkText: 'Завершить тест',
			nzMaskClosable: true,
			nzOnOk: () => {
				void this.router.navigateByUrl(`/${ROUTER_LINKS.result}`);
				this.storeService.setSelectedTest(null);
			},
		});
	}

	protected goToMain(): void {
		void this.router.navigateByUrl(`/${ROUTER_LINKS.start}`);
	}

	private scroll(): void {
		const quizContainerElement = this.quizContainerElement() ?? null;

		if (quizContainerElement !== null) {
			quizContainerElement.nativeElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	}
}
