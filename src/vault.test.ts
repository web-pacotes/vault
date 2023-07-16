import { describe, expect, test } from '@jest/globals';
import { Vault } from './vault';

describe('vault', () => {
	describe('lookup', () => {
		test('returns dependency identified by token', () => {
			const token = 'my token';
			const dependency = 'coool dependency!';
			const vault = new Vault();

			vault.store(dependency, token);

			const result = vault.lookup(token);

			expect(result).toBe(dependency);
		});

		test('returns undefined if no dependency is identified by token', () => {
			const token = 'my token';
			const faultyToken = 'my second token';
			const dependency = 'coool dependency!';
			const vault = new Vault();

			vault.store(dependency, token);

			const result = vault.lookup(faultyToken);

			expect(result).toBeUndefined();
		});
	});
});
