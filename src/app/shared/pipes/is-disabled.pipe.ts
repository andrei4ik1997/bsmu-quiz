import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { Nulled } from '@shared/entities/shared.types';
import { isNil } from '@shared/utils/shared.utils';

@Pipe({ name: 'isDisabled' })
export class IsDisabledPipe implements PipeTransform {
	public transform<T>(value: Nulled<T | T[]>): boolean {
		if (isNil(value)) {
			return true;
		}

		if (Array.isArray(value)) {
			return value.length === 0;
		}

		return false;
	}
}
