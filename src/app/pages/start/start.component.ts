import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import type { TestOption } from '@shared/entities/shared.types';
import { StoreService } from '@shared/services/store.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';

@Component({
	selector: 'app-start-page',
	templateUrl: './start.component.html',
	styleUrl: './start.component.scss',
	imports: [FormsModule, NzButtonModule, NzSelectModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class StartPageComponent {
	private readonly router = inject(Router);
	private readonly storeService = inject(StoreService);

	protected readonly tests: TestOption[] = [
		{
			value: 'common',
			label: 'Вопросы по общепрофессиональным дисциплинам (дополнительные) СCО',
			title: 'Вопросы по общепрофессиональным дисциплинам (дополнительные) СCО',
			disabled: false,
			hide: false,
		},
		{
			value: 'nurseAnesthetist',
			label: 'Медицинская сестра-анестезист (старшая), медицинский брат-анестезист (старший)',
			title: 'Медицинская сестра-анестезист (старшая), медицинский брат-анестезист (старший)',
			disabled: false,
			hide: false,
		},
	];

	protected readonly selectedTest = signal<TestOption | null>(null);
	protected readonly testQuestions = toSignal(this.storeService.testQuestions$, { initialValue: null });

	protected changeTest(value: TestOption['value']): void {
		const option =
			this.tests.find((test) => {
				return test.value === value;
			}) ?? null;

		this.selectedTest.set(option);
	}

	protected startQuiz(): void {
		this.storeService.setSelectedTest(this.selectedTest());

		const testQuestions = this.testQuestions();

		if (testQuestions !== null) {
			void this.router.navigateByUrl(`/${ROUTER_LINKS.quiz}/${testQuestions[0].id}`);
		}
	}
}
