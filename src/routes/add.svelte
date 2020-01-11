<script>
	import { goto } from '@sapper/app'

	import {todos} from "../store/todos"

	let value = '';

	function handleSubmit() {
		todos.add(value);

		value = '';

		goto('/');
	}
</script>

<svelte:head>
	<title>Add</title>
</svelte:head>

<h1>Add a todo</h1>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value>
</form>