import type { ROUTER_LINKS } from './shared.constants';

export type AppRouterLink = (typeof ROUTER_LINKS)[keyof typeof ROUTER_LINKS];

export type TestOption = {
	value: 'common' | 'nurseAnesthetist';
	label: string;
	disabled: boolean;
	title: string;
	hide: boolean;
};

export type Question = {
	id: number;
	question: string;
	answers: QuestionAnswer[];
	isMultiple: boolean;
	rightAnswer: string;
};

export type QuestionAnswer = { id: number; value: string; isCorrect: boolean };
export type TestResult = {
	testName: TestOption['title'];
	testQuestions: Question[];
	questionId: Question['id'];
	userAnswers: Array<QuestionAnswer & { userChoice: boolean }>;
	answers: Array<QuestionAnswer['id']>;
};

export type ModalQuestionData = {
	question: Question | null;
	questionUserAnswer: TestResult | null;
};
