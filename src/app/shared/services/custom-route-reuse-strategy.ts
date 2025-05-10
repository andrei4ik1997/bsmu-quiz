import type { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
	public shouldDetach(): boolean {
		return false;
	}

	public store(): void {}

	public shouldAttach(): boolean {
		return false;
	}

	public retrieve(): DetachedRouteHandle | null {
		return null;
	}

	public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
		if (future.data['noReuse'] === true) {
			return false;
		}

		return future.routeConfig === curr.routeConfig;
	}
}
