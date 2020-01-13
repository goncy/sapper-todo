import todos from "./store"
import api from "./resources"

export function add(todo) {
	return api.add(todo).then(() => todos.update(_todos => _todos.concat(todo)))
}

export function complete(id) {
	return api.complete(id).then(() => todos.update(_todos => _todos.map(_todo => _todo.id === id ? {..._todo, status: 'completed'} : _todo)))
}

export function fetch() {
	return api.fetch().then(todos.set)
}
