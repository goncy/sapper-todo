// This file mocks a backend

const deffer = (value, time = 1000) => new Promise((resolve) => setTimeout(() => resolve(value), time))

const todos = {
	get list() {
		return typeof window === "undefined" ? [] : JSON.parse(localStorage.getItem('todos') || '[]')
	},
	add(todo) {
		localStorage.setItem("todos", JSON.stringify(todos.list.concat(todo)))
	},
	complete(id) {
		localStorage.setItem("todos", JSON.stringify(todos.list.map(_todo => _todo.id === id ? {..._todo, status: 'completed'} : _todo)))
	}
}

export default {
	fetch: () => deffer(todos.list),
	add: (todo) => deffer(todos.add(todo)),
	complete: (todo) => deffer(todos.complete(todo)),
}
