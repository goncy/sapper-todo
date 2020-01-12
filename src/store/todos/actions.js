import todos from "./store"
import api from "./resources"

export function add(todo) {
	return todos.update(s => s.concat(todo))
}

export function remove(todo) {
	return todos.update(s => s.filter(t => t !== todo))
}

export function reset() {
	return todos.set([])
}

export function fetch() {
	return api.fetch().then(todos.set)
}