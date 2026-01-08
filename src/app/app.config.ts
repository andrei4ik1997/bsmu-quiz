import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import type { ApplicationConfig } from '@angular/core';
import { provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// eslint-disable-next-line sonarjs/deprecation
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {
	provideAppHttpClient,
	provideAppRouter,
	provideLocaleId,
	provideNgswWorker,
	provideNgZorro,
	provideServices,
} from './app.providers';

registerLocaleData(en);

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideZonelessChangeDetection(),
		provideAppHttpClient(),
		provideAppRouter(),
		// eslint-disable-next-line sonarjs/deprecation, @typescript-eslint/no-deprecated
		provideAnimationsAsync(),
		provideServices(),
		provideNgZorro(),
		provideNgswWorker(),
		provideLocaleId(),
	],
};
