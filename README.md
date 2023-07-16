# vault

A small, token based container designed for dependency injection 🫙

![npm version](https://badgen.net/npm/v/@web-pacotes/vault) ![npm total downloads](https://badgen.net/npm/dt/@web-pacotes/vault) ![bundlephobia bundle size](https://badgen.net/bundlephobia/min/@web-pacotes/vault)

---

## How to use

Using Vault to store and lookup dependencies is as simple as:

```typescript
// Create a vault
const vault = new Vault();

// Create some tokens
const token = 'my cool token';

// Store dependencies!
vault.store('my secret message', token);

// Look them up at some point in your program
const dependency = vault.lookup<string>(token);

// It should print "just lookup this dependency: my secret message"
console.info(`just lookup this dependency: ${dependency}`);
```

## Features

- Store primitive and non-primitive dependencies
- Prevent store nullable or undefined values
- Type inferred lookups

## Why should I use Vault?

If you're working in a _context_ based environment and you want to retrieve dependencies based on the context state, then Vault was designed for you. Simply register the vault instance to your context and get the dependencies in some point in your app after. Here's an example on how you can use in SvelteKit:

```typescript
// src/routes/+page.ts

export const load = (async () => {
    const dependency = new AuthenticationRepositoryImpl(...);
    const vault = new Vault();

    vault.store(dependency, 'AuthenticationRepository');

    setContext('vault', dependency);
});

...

// src/lib/components/AuthenticationStore.ts

const { value } = getContext('vault');
const authenticationRepo = vault.lookup<AuthenticationRepository>('AuthenticationRepository');

const store = writable<AuthenticationState>();

return {
    store.subscribe,
    authenticate: () => authenticationRepo.loginAnonymously(),
};

```

---

## Bugs and Contributions

Found any bug (including typos) in the package? Do you have any suggestion
or feature to include for future releases? Please create an issue via
GitHub in order to track each contribution. Also, pull requests are very
welcome!

To contribute, start by setting up your local development environment. The [setup.md](setup.md) document will onboard you on how to do so!
