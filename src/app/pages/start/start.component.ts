import type { OnInit } from '@angular/core';
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
export default class StartPageComponent implements OnInit {
	private readonly router = inject(Router);
	private readonly storeService = inject(StoreService);

	protected readonly tests: TestOption[] = [
		{
			value: 'common',
			label: 'Вопросы по общепрофессиональным дисциплинам (дополнительные) СCО ',
		},
		{
			value: 'nurseAnesthetist',
			label: 'Медицинская сестра-анестезист (старшая), медицинский брат-анестезист (старший)',
		},
	];

	protected readonly selectedTest = signal<TestOption | null>(null);
	protected readonly testQuestions = toSignal(this.storeService.testQuestions$, { initialValue: null });

	public ngOnInit(): void {
		this.navigateToQuiz();
	}

	protected changeTest(value: TestOption['value']): void {
		const option =
			this.tests.find((test) => {
				return test.value === value;
			}) ?? null;

		this.selectedTest.set(option);
	}

	protected startQuiz(): void {
		this.storeService.setSelectedTest(this.selectedTest());
		this.storeService.clearTestResults();

		this.navigateToQuiz();
	}

	private navigateToQuiz(): void {
		void this.router.navigateByUrl(`/${ROUTER_LINKS.quiz}`);
	}
}
