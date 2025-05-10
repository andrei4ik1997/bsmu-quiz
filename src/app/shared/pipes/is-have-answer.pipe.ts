import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { TestResult } from '@shared/entities/shared.types';

// eslint-disable-next-line @angular-eslint/no-pipe-impure
@Pipe({ name: 'isHaveAnswer', pure: false })
export class IsHaveAnswerPipe implements PipeTransform {
	public transform(questionId: number, userAnswers: Map<number, TestResult>): boolean {
		if (userAnswers.has(questionId)) {
			const answer = userAnswers.get(questionId) as TestResult;

			return answer.answers.length > 0;
		}

		return false;
	}
}
