import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';
import type { Nulled } from '@shared/entities/shared.types';

@Pipe({ name: 'isArray' })
export class IsArrayPipe implements PipeTransform {
	public transform<T>(value: Nulled<T>): boolean {
		return Array.isArray(value);
	}
}
