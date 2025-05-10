import eslintJs from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import eslintTs from 'typescript-eslint';

import comments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import angular from 'angular-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import pluginPromise from 'eslint-plugin-promise';
import rxjsAngular from 'eslint-plugin-rxjs-angular-updated';
import rxjsX from 'eslint-plugin-rxjs-x';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import sonarjsPlugin from 'eslint-plugin-sonarjs';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

import stylisticJs from '@stylistic/eslint-plugin-js';
import stylisticTs from '@stylistic/eslint-plugin-ts';

import { angularRules } from './rules/angular-rules.mjs';
import { eslintRules } from './rules/eslint-rules.mjs';
import { miscellaneousRules } from './rules/miscellaneous-rules.mjs';
import { namingRules } from './rules/naming-rules.mjs';
import { rxjsAngularRules } from './rules/rxjs-angular-rules.mjs';
import { rxjsRules } from './rules/rxjs-rules.mjs';
import { stylisticJsRules } from './rules/stylistic-js-rules.mjs';
import { stylisticTsRules } from './rules/stylistic-ts-rules.mjs';
import { testsRules } from './rules/tests-rules.mjs';
import { typescriptRules } from './rules/typescript-rules.mjs';

export const baseConfig = eslintTs.config(
	{
		name: 'general-configuration',
		languageOptions: {
			globals: {
				...globals.node,
				...globals.commonjs,
				...globals.es2021,
				...globals.browser,
				...globals.jasmine,
			},
			parser: tsParser,
			parserOptions: {
				projectService: true,
			},
		},
		linterOptions: {
			reportUnusedDisableDirectives: true,
		},
		plugins: {
			'simple-import-sort': simpleImportSortPlugin,
			unicorn: eslintPluginUnicorn,
			'rxjs-angular': rxjsAngular,
			'@stylistic/js': stylisticJs,
			'@stylistic/ts': stylisticTs,
		},
	},
	{
		name: 'ignore-patterns',
		ignores: [
			'**/tests-report/**',
			'**/snapshots/**',
			'**/test-results/**',
			'*.txt',
			'*.ico',
			'*.xml',
			'*.md',
			'LICENSE',
			'**/karma-config/**',
			'**/karma.config.js',
			'**/karma.config.ts',
			'**/playwright.config.ts',
			'**/*.config.js',
			'dist',
			'**/node_modules/**',
			'./config/**',
			'**/coverage/**',
			'**/eslintrc.js',
			'**/.eslintrc.js',
			'**/*.d.ts',
			'**/dist/**',
			'**//scripts/**',
			'**/docs/**',
			'.cache/**',
			'.git/**',
			'.idea/**',
			'**/*.mock.ts',
			'**/proxy/**',
			'**/eslint-config/**',
			'**/webpack/**',
			'*.template',
			'**/*.mjs',
		],
	},
	{
		name: 'general-js-ts',
		files: ['**/*.js', '**/*.ts'],
		extends: [
			eslintJs.configs.recommended,
			comments.recommended,
			...eslintTs.configs.strictTypeChecked,
			...angular.configs.tsRecommended,
			pluginPromise.configs['flat/recommended'],
			rxjsX.configs.recommended,
			sonarjsPlugin.configs.recommended,
		],
		processor: angular.processInlineTemplates,
		rules: {
			...eslintJs.configs.recommended.rules,
			...eslintRules,
			...namingRules,
			...miscellaneousRules,
			...rxjsRules,
			...rxjsAngularRules,
			...angularRules.classFiles,
			...stylisticJsRules,
			...typescriptRules,
			...stylisticTsRules,
		},
	},
	{
		name: 'angular-templates',
		files: ['**/*.component.html'],
		extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
		rules: {
			...angularRules.templates,
		},
	},
	{
		name: 'tests',
		files: ['**/*.spec.ts', '**/*.mock.ts'],
		rules: { ...testsRules, ...angularRules.tests },
	},
	{
		name: 'disable-ts-for-js',
		files: ['**/*.js'],
		...eslintTs.configs.disableTypeChecked,
	},
	{
		name: 'prettier',
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			'prettier/prettier': 'error',
		},
	}
);
