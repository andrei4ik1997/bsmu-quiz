import { inject } from '@angular/core';
import { type CanMatchFn, Router } from '@angular/router';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import { StoreService } from '@shared/services/store.service';

// eslint-disable-next-line sonarjs/function-return-type
export const resultGuard: CanMatchFn = () => {
	const router = inject(Router);
	const storeService = inject(StoreService);
	const userAnswers = storeService.testResults;

	if (userAnswers().size === 0) {
		return router.parseUrl(`/${ROUTER_LINKS.start}`);
	}

	return true;
};
