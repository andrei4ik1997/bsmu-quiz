import { inject, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import type { Subscription } from 'rxjs';
import { filter, interval, startWith } from 'rxjs';

@Injectable()
export class AppUpdateService {
	private readonly swUpdate = inject(SwUpdate);

	private readonly intervalSource$ = interval(1 * 60 * 1000);
	private intervalSubscription: Subscription | null = null;

	constructor() {
		this.swUpdate.versionUpdates
			.pipe(
				filter((event) => {
					return event.type === 'VERSION_READY';
				})
			)
			.subscribe(() => {
				this.applyUpdate();
			});
	}

	public checkUpdate(): void {
		this.intervalSubscription?.unsubscribe();

		if (!this.swUpdate.isEnabled) {
			return;
		}

		this.intervalSubscription = this.intervalSource$.pipe(startWith(null)).subscribe(() => {
			void this.swUpdate
				.checkForUpdate()
				.then((isNewVersion) => {
					if (isNewVersion) {
						this.applyUpdate();
					}
				})
				.catch((error: unknown) => {
					console.error('Failed to checkForUpdate:', error);
				});
		});
	}

	private applyUpdate(): void {
		this.swUpdate
			.activateUpdate()
			.then((isUpdatesActivated) => {
				if (isUpdatesActivated) {
					if (confirm('New version is ready. Refresh the page?')) {
						document.location.reload();
					}
				}
			})
			.catch((error: unknown) => {
				console.error('Failed to apply updates:', error);
			});
	}
}
