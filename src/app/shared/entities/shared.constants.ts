export const ROUTER_LINKS = {
	index: '/',
	start: 'start',
	quiz: 'quiz',
	result: 'result',
} as const;

export const LOCAL_STORAGE_KEYS = {
	selectedTest: 'selectedTest',
	testQuestions: 'testQuestions',
	testResults: 'testResults',
	currentQuestionIndex: 'currentQuestionIndex',
} as const;

export const BREAKPOINTS = {
	mobile: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1440,
	desktop: 1920,
	hd: 2560,
	qhd: 3840,
	uhd: 5120,
} as const;
