<script>
  import {all, pending, completed} from "../store/todos/state";
  import {fetch, complete} from "../store/todos/actions";
  import Todo from "../components/Todo.svelte";
</script>

<svelte:head>
  <title>Todos</title>
</svelte:head>

<div>
  <h1>Some things to do</h1>

  {#await fetch()}
    <p>Fetching todos...</p>
    {:then}
      {#if $all.length}
        <h3>Pending</h3>
        {#if $pending.length}
          <ul>
            {#each $pending as {id, status, text}}
              <Todo onComplete={() => complete(id)}>{text}</Todo>
            {/each}
          </ul>
          {:else}
            <div style="margin-bottom: 1rem; margin-left: 1rem;">Nothing pending</div>
        {/if}
        <h3>Completed</h3>
        {#if $completed.length}
          <ul>
            {#each $completed as todo}
              <Todo>{todo.text}</Todo>
            {/each}
          </ul>
          {:else}
            <div>Nothing completed</div>
        {/if}
      {:else}
        <small>You have nothing to do</small>
      {/if}
    {:catch}
      <p>Something failed</p>
  {/await}
</div>

<style>
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }
</style>
