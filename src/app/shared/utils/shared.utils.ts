import type { Nil, Nullable } from '@shared/entities/shared.types';

export function isNil<T>(value: Nullable<T>): value is Nil {
	// eslint-disable-next-line eqeqeq
	return value == null;
}

export function isDefined<T>(value: Nullable<T>): value is NonNullable<T> {
	return !isNil(value);
}
