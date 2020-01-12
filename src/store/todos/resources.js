export default {
	fetch: () => new Promise((resolve) => setTimeout(() => resolve([{text: 'something', status: 'pending'}, {text: 'todo', status: 'completed'}]), 2000))
}