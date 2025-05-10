import type { Routes } from '@angular/router';
import { ROUTER_LINKS } from '@shared/entities/shared.constants';
import { quizGuard } from '@shared/guards/quiz.guard';
import { resultGuard } from '@shared/guards/result.guard';

const mainRoutes: Routes = [
	{
		path: '',
		loadComponent: async () => {
			return await import('@shared/components/layout/layout.component').then((m) => {
				return m.LayoutComponent;
			});
		},
		children: [
			{
				path: ROUTER_LINKS.start,
				title: 'Начало',
				loadComponent: async () => {
					return import('@pages/start/start.component');
				},
			},
			{
				path: ROUTER_LINKS.quiz,
				title: 'Тестирование',
				canMatch: [quizGuard],
				loadChildren: async () => {
					return import('@pages/quiz/quiz.routes');
				},
			},
			{
				path: ROUTER_LINKS.result,
				title: 'Результат теста',
				canMatch: [resultGuard],
				loadComponent: async () => {
					return import('@pages/result/result.component');
				},
			},
			{
				path: '**',
				redirectTo: ROUTER_LINKS.start,
			},
		],
	},
];

export default mainRoutes;
