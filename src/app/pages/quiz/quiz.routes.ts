import type { Routes } from '@angular/router';

const quizRoutes: Routes = [
	{
		path: '',
		loadComponent: async () => {
			return await import('@pages/quiz/quiz.component');
		},
		children: [
			{
				path: ':id',
				title: 'Тест',
				loadComponent: async () => {
					return import('@shared/components/question/question.component').then((c) => {
						return c.QuestionComponent;
					});
				},
				data: { noReuse: true },
			},
		],
	},
];

export default quizRoutes;
