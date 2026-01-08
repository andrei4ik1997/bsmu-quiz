import { computed, Injectable, signal } from '@angular/core';
import { BREAKPOINTS } from '@shared/entities/shared.constants';

@Injectable()
export class AdaptiveService {
	private readonly currentWindowWidthSignal = signal<number>(0);
	private readonly currentWindowHeightSignal = signal<number>(0);

	public readonly currentWindowWidth = computed(() => {
		return this.currentWindowWidthSignal();
	});

	public readonly currentWindowHeight = computed(() => {
		return this.currentWindowHeightSignal();
	});

	public readonly isTablet = computed(() => {
		return this.currentWindowWidthSignal() < BREAKPOINTS.tablet;
	});

	public readonly isLaptop = computed(() => {
		return this.currentWindowWidthSignal() < BREAKPOINTS.laptop;
	});

	public setWindowWidth(width: number): void {
		this.currentWindowWidthSignal.set(width);
	}

	public setWindowHeight(height: number): void {
		this.currentWindowHeightSignal.set(height);
	}
}
