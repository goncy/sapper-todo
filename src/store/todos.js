import { writable, derived } from 'svelte/store';

const api = {
	fetch: () => new Promise((resolve) => setTimeout(() => resolve([{text: 'something', status: 'pending'}, {text: 'todo', status: 'completed'}]), 2000))
}

function createStore() {
	const {subscribe, update, set} = writable([]);
	
	function add(todo) {
		return update(s => s.concat(todo))
	}

	function remove(todo) {
		return update(s => s.filter(t => t !== todo))
	}

	function reset() {
		return set([])
	}

	function fetch() {
		return api.fetch().then(set)
	}

	return {
		add,
		remove,
		reset,
		fetch,
		subscribe,
	};
}

export const todos = createStore();

export const all = derived(todos, $todos => $todos)
export const completed = derived(todos, $todos => $todos.filter(({status}) => status === "completed"))
export const pending = derived(todos, $todos => $todos.filter(({status}) => status === "pending"))