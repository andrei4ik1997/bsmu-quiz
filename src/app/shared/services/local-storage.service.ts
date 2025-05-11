import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import type { LocalStorageKeys } from '@shared/entities/shared.types';

@Injectable()
export class LocalStorageService {
	private readonly localStorage = inject(DOCUMENT, { optional: true })?.defaultView?.localStorage;

	public get<T = string>(key: LocalStorageKeys): T | null {
		const item = this.localStorage?.getItem(key) ?? null;

		if (item === null) {
			return null;
		}

		if (key === 'testResults') {
			const parsed = JSON.parse(item);

			return (Array.isArray(parsed) ? new Map(parsed) : new Map()) as T;
		}

		return this.isJSONValid(item) ? (JSON.parse(item) as T) : (item as T);
	}

	public set<T>(key: LocalStorageKeys, value: T): void {
		if (value instanceof Map) {
			this.localStorage?.setItem(key, JSON.stringify([...value]));
		} else {
			this.localStorage?.setItem(key, JSON.stringify(value));
		}
	}

	public remove(key: LocalStorageKeys): void {
		this.localStorage?.removeItem(key);
	}

	public removeKeys(keys: LocalStorageKeys[]): void {
		keys.forEach((key) => {
			return this.localStorage?.removeItem(key);
		});
	}

	public clear(): void {
		this.localStorage?.clear();
	}

	private isJSONValid(value: string): boolean {
		try {
			JSON.parse(value);

			return true;
		} catch (error) {
			console.error(error);

			return false;
		}
	}
}
