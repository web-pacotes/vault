import { Vault } from 'vault';

function main() {
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
}

main();
