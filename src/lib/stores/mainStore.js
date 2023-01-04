import { writable } from 'svelte/store';

export const mainStore = writable({
	  name: 'SvelteKit',
	  version: '1.0.0',

	  // Add your own properties here
	  // ...
});

