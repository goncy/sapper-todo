import todos from "./store"
import api from "./resources"

export function add(todo) {
	return api.add(todo).then(() => todos.update(_todos => _todos.concat(todo)))
}

export function remove(todo) {
	return api.remove(todo).then(() => todos.update(_todos => _todos.filter(_todo => _todo !== todo)))
}

export function fetch() {
	return api.fetch().then(todos.set)
}