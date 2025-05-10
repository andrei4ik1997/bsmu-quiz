import type { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadChildren: async () => {
			return import('@pages/main.routes');
		},
	},
	{
		path: '**',
		redirectTo: '',
	},
];
