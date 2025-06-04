import type {
	NzCellAlignDirective,
	NzTableFilterFn,
	NzTableFilterList,
	NzTableSortFn,
	NzTableSortOrder,
} from 'ng-zorro-antd/table';

import type { LOCAL_STORAGE_KEYS, ROUTER_LINKS } from './shared.constants';

export type AppRouterLink = (typeof ROUTER_LINKS)[keyof typeof ROUTER_LINKS];

export type LocalStorageKeys = (typeof LOCAL_STORAGE_KEYS)[keyof typeof LOCAL_STORAGE_KEYS];

export type TestOption = {
	value: 'common' | 'nurseAnesthetist';
	label: string;
};

export type Question = {
	id: number;
	question: string;
	answers: QuestionAnswer[];
	isMultiple: boolean;
	rightAnswer: string;
};

export type MappedQuestion = Question & { index: number };

export type QuestionAnswer = { id: number; value: string; isCorrect: boolean };
export type TestResult = {
	userAnswers: Array<{ id: number; isCorrect: boolean; isUserChoiceCorrect: boolean }>;
	answers: Array<QuestionAnswer['id']>;
};

export type ModalQuestionData = {
	question: MappedQuestion | null;
	questionUserAnswer: TestResult | null;
};

export type TableConfig<T> = {
	name: string;
	dataProperty?: keyof T;
	width?: string;
	showSort?: boolean;
	sortPriority?: number | false;
	sortDirections?: NzTableSortOrder[];
	sortOrder?: NzTableSortOrder;
	sortFn?: NzTableSortFn<T>;
	showFilter?: boolean;
	filterMultiple?: boolean;
	filters?: NzTableFilterList;
	filterFn?: NzTableFilterFn<T>;
	cellType?: 'action';
	align?: NzCellAlignDirective['nzAlign'];
	customFormatter?(row: T): string;
};
