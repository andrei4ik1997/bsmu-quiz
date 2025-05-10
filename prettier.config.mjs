/** @type {import("prettier").Config} */
const config = {
	overrides: [
		{
			files: '*.json',
			options: { parser: 'json' },
		},
		{
			files: '*.html',
			options: { parser: 'angular' },
		},
	],
	printWidth: 120,
	singleQuote: true,
	useTabs: true,
	tabWidth: 4,
	semi: true,
	bracketSpacing: true,
	arrowParens: 'always',
	trailingComma: 'es5',
	endOfLine: 'auto',
	plugins: ['prettier-plugin-organize-attributes'],
	attributeGroups: [
		'$ANGULAR_STRUCTURAL_DIRECTIVE',
		'$ANGULAR_ELEMENT_REF',
		'$ID',
		'$CLASS',
		'$DEFAULT',
		'$CODE_GUIDE',
		'$ANGULAR_ANIMATION',
		'$ANGULAR_ANIMATION_INPUT',
		'$ANGULAR_INPUT',
		'$ANGULAR_TWO_WAY_BINDING',
		'$ANGULAR_OUTPUT',
	],
};

export default config;
