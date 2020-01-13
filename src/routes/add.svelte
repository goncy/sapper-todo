<script>
	import { goto } from '@sapper/app'

	import {add} from "../store/todos/actions"

	let text = '';

	function handleSubmit() {
		add({text, id: String(+new Date()), status: 'pending'});

		text = '';

		goto('/');
	}
</script>

<svelte:head>
	<title>Add</title>
</svelte:head>

<h1>Add a todo</h1>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={text}>
</form>
