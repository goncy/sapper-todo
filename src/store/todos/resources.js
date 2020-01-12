// This file mocks a backend

const deffer = (value, time = 1000) => new Promise((resolve) => setTimeout(() => resolve(value), time))

const todos = {
	get list() {
		return typeof window === "undefined" ? [] : JSON.parse(localStorage.getItem('todos') || '[]')
	},
	add(todo) {
		localStorage.setItem("todos", JSON.stringify(todos.list.concat(todo)))
	},
	remove(todo) {
		localStorage.setItem("todos", JSON.stringify(todos.list.filter(_todo => _todo === todo)))
	}
}

export default {
	fetch: () => deffer(todos.list),
	add: (todo) => deffer(todos.add(todo)),
	remove: (todo) => deffer(todos.remove(todo)),
}