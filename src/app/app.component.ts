import type { OnInit } from '@angular/core';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdaptiveService } from '@shared/services/adaptive.service';
import { AppUpdateService } from '@shared/services/app-update.service';
import { StoreService } from '@shared/services/store.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'(window:resize)': 'onWindowResize()',
	},
})
export class AppComponent implements OnInit {
	private readonly storeService = inject(StoreService);
	private readonly appUpdateService = inject(AppUpdateService);
	private readonly adaptiveService = inject(AdaptiveService);

	constructor() {
		this.appUpdateService.checkUpdate();
		this.onWindowResize();
	}

	public ngOnInit(): void {
		this.storeService.restoreData();
	}

	protected onWindowResize(): void {
		this.adaptiveService.setWindowWidth(window.innerWidth);
		this.adaptiveService.setWindowHeight(window.innerHeight);
	}
}
