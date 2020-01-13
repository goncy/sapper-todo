<script>
	import { goto } from "@sapper/app";

	import {add} from "../store/todos/actions";

	let text = "";

	function handleSubmit() {
		add({text, id: String(+new Date()), status: "pending"});

		text = "";

		goto("/");
	}
</script>

<svelte:head>
	<title>Add</title>
</svelte:head>

<h1>Add a todo</h1>

<form on:submit|preventDefault={handleSubmit}>
	<input bind:value={text}>
</form>

<style>
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
  </style>
