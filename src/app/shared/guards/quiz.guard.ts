import { inject } from '@angular/core';
import { type CanMatchFn, Router } from '@angular/router';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import { StoreService } from '@shared/services/store.service';
import { isNil } from '@shared/utils/shared.utils';

// eslint-disable-next-line sonarjs/function-return-type
export const quizGuard: CanMatchFn = () => {
	const router = inject(Router);
	const storeService = inject(StoreService);
	const selectedTestOption = storeService.selectedTest;

	if (isNil(selectedTestOption())) {
		return router.parseUrl(`/${ROUTER_LINKS.start}`);
	}

	return true;
};
