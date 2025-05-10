export const rxjsRules = {
	'rxjs-x/ban-observables': [
		'error',
		{
			of: false,
			onErrorResumeNext: 'What is this? Visual Basic?',
		},
	],
	'rxjs-x/ban-operators': [
		'error',
		{
			of: false,
			mapTo: 'Use map(() => val)',
		},
	],
	'rxjs-x/finnish': [
		'error',
		{
			functions: true,
			methods: false,
			names: {
				'^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate|store)$': false,
			},
			parameters: true,
			properties: true,
			strict: false,
			types: {
				'^EventEmitter$': false,
			},
			variables: true,
		},
	],
	'rxjs-x/no-async-subscribe': 'error',
	'rxjs-x/no-compat': 'error',
	'rxjs-x/no-connectable': 'error',
	'rxjs-x/no-create': 'error',
	'rxjs-x/no-cyclic-action': 'off',
	'rxjs-x/no-explicit-generics': 'off',
	'rxjs-x/no-exposed-subjects': 'error',
	'rxjs-x/no-redundant-notify': 'error',
	'rxjs-x/no-index': 'error',
	'rxjs-x/no-internal': 'error',
	'rxjs-x/no-ignored-error': 'off',
	'rxjs-x/no-ignored-notifier': 'error',
	'rxjs-x/no-floating-observables': 'error',
	'rxjs-x/no-ignored-replay-buffer': 'error',
	'rxjs-x/no-ignored-subscription': 'off',
	'rxjs-x/no-nested-subscribe': 'error',
	'rxjs-x/no-ignored-subscribe': 'error',
	'rxjs-x/no-subclass': 'error',
	'rxjs-x/no-subject-unsubscribe': 'error',
	'rxjs-x/no-subject-value': 'off',
	'rxjs-x/no-topromise': 'error',
	'rxjs-x/no-unbound-methods': 'error',
	'rxjs-x/no-unsafe-catch': 'error',
	'rxjs-x/no-unsafe-first': 'error',
	'rxjs-x/no-unsafe-subject-next': 'error',
	'rxjs-x/no-unsafe-switchmap': 'error',
	'rxjs-x/prefer-observer': 'off',
	'rxjs-x/suffix-subjects': [
		'error',
		{
			parameters: true,
			properties: true,
			suffix: 'Subject',
			types: {
				'^EventEmitter$': false,
			},
			variables: true,
		},
	],
	'rxjs-x/throw-error': 'error',
	'rxjs-x/no-implicit-any-catch': 'off',
	'no-restricted-globals': [
		'error',
		{
			name: 'setInterval',
			message: 'Avoid using timers. Use `interval` from rxjs instead.',
		},
		{
			name: 'setTimeout',
			message: 'Avoid using timers. Use `timer` from rxjs instead.',
		},
	],
	'no-restricted-properties': [
		'error',
		{
			object: 'window',
			property: 'setInterval',
			message: 'Avoid using timers. Use `interval` from rxjs instead.',
		},
		{
			object: 'window',
			property: 'setTimeout',
			message: 'Avoid using timers. Use `timer` from rxjs instead.',
		},
	],
};
