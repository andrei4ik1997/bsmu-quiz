import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import type { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideAppHttpClient, provideAppRouter, provideNgZorro, provideServices } from './app.providers';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideAppHttpClient(),
		provideAppRouter(),
		provideAnimationsAsync(),
		provideServices(),
		provideNgZorro(),
	],
};
