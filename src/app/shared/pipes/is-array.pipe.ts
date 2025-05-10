import type { PipeTransform } from '@angular/core';
import { Pipe } from '@angular/core';

@Pipe({ name: 'isArray' })
export class IsArrayPipe implements PipeTransform {
	public transform<T>(value: T | null): boolean {
		return Array.isArray(value);
	}
}
