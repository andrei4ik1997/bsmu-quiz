import type { HttpInterceptorFn } from '@angular/common/http';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import type { EnvironmentProviders } from '@angular/core';
import { inject, isDevMode, LOCALE_ID, makeEnvironmentProviders } from '@angular/core';
import type { InMemoryScrollingOptions, IsActiveMatchOptions, ViewTransitionsFeatureOptions } from '@angular/router';
import {
	provideRouter,
	Router,
	withComponentInputBinding,
	withInMemoryScrolling,
	withViewTransitions,
} from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';
import { AdaptiveService } from '@shared/services/adaptive.service';
import { AppUpdateService } from '@shared/services/app-update.service';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { provideNzI18n, ru_RU } from 'ng-zorro-antd/i18n';

import { routes } from './app.routes';
import { StoreService } from './shared/services/store.service';

export function provideAppRouter(): EnvironmentProviders {
	const viewTransitionConfig: ViewTransitionsFeatureOptions = {
		onViewTransitionCreated: (transitionInfo) => {
			const router = inject(Router);
			const targetUrl = router.currentNavigation()?.finalUrl;

			const config: IsActiveMatchOptions = {
				paths: 'exact',
				matrixParams: 'exact',
				fragment: 'ignored',
				queryParams: 'ignored',
			};

			if (router.isActive(targetUrl ?? '', config)) {
				transitionInfo.transition.skipTransition();
			}
		},
	};

	const scrollConfig: InMemoryScrollingOptions = {
		scrollPositionRestoration: 'top',
		anchorScrolling: 'enabled',
	};

	return makeEnvironmentProviders([
		provideRouter(
			routes,
			withComponentInputBinding(),
			withViewTransitions(viewTransitionConfig),
			withInMemoryScrolling(scrollConfig)
		),
	]);
}

export function provideAppHttpClient(): EnvironmentProviders {
	const interceptors: HttpInterceptorFn[] = [];

	return makeEnvironmentProviders([provideHttpClient(withInterceptors(interceptors))]);
}

export function provideServices(): EnvironmentProviders {
	return makeEnvironmentProviders([LocalStorageService, StoreService, AdaptiveService, AppUpdateService]);
}

export function provideNgZorro(): EnvironmentProviders {
	return makeEnvironmentProviders([provideNzI18n(ru_RU)]);
}

export function provideNgswWorker(): EnvironmentProviders {
	return makeEnvironmentProviders([
		provideServiceWorker('ngsw-worker.js', {
			updateViaCache: 'all',
			enabled: !isDevMode(),
			registrationStrategy: 'registerWhenStable:30000',
		}),
	]);
}

export function provideLocaleId(): EnvironmentProviders {
	return makeEnvironmentProviders([{ provide: LOCALE_ID, useValue: 'en-US' }]);
}
