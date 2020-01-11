import { writable } from 'svelte/store';

function createStore() {
  const { subscribe, set, update } = writable([]);

	return {
		subscribe,
		add: (todo) => update(s => s.concat(todo)),
		remove: (todo) => update(s => s.filter(t => t !== todo)),
		reset: () => set([])
	};
}

export const todos = createStore();