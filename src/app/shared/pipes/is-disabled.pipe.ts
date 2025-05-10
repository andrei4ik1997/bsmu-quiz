import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({ name: 'isDisabled' })
export class IsDisabledPipe implements PipeTransform {
	public transform<T>(value: T | T[] | null | undefined): boolean {
		if (value === null || value === undefined) {
			return true;
		}

		if (Array.isArray(value)) {
			return value.length === 0;
		}

		return false;
	}
}
