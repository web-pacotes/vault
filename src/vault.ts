/**
 * A token used to identify a dependency. Can either be a plain string or a {@link symbol}.
 */
export type Token = string | symbol;

/**
 * Specifies a dependency that can be stored in a container. Typed to {@link unknown}, so even primitives can be stored.
 */
export type Dependency = unknown;

/**
 * Vault is a small dependency injection container that works with {@link Token}. Internally it's
 * implemented using a JavaScript object so that dependency lookups are fast and index based.
 */
export class Vault {
	private container: { [key: Token]: Dependency } = {};

	/**
	 * Stores a dependency in the vault, which is identified by a token.
	 *
	 * @param value - the dependency to store. Typed to {@link NonNullable} so TypeScript
	 * can enforce non nullable/undefined dependencies.
	 * @param token - the token that will allow lookups by an identifier.
	 */
	public store(value: NonNullable<Dependency>, token: Token) {
		this.container[token] = value;
	}

	/**
	 * Performs a lookup for a dependency in the vault, using a token. Generically typed so clients
	 * don't need to perform type checks on the lookup result.
	 *
	 * @param token - the token that identifies the dependency.
	 * @returns the dependency typed to {@link T} if it was found. If not found, the result is typed as undefined.
	 */
	public lookup<T extends Dependency>(token: Token): T | undefined {
		return this.container[token] as T | undefined;
	}
}
