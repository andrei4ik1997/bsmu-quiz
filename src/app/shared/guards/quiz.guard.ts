import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { type CanMatchFn, Router } from '@angular/router';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import { StoreService } from '@shared/services/store.service';

// eslint-disable-next-line sonarjs/function-return-type
export const quizGuard: CanMatchFn = () => {
	const router = inject(Router);
	const storeService = inject(StoreService);
	const selectedTestOption = toSignal(storeService.selectedTest$, { initialValue: null });

	if (selectedTestOption() === null) {
		return router.parseUrl(`/${ROUTER_LINKS.start}`);
	}

	return true;
};
