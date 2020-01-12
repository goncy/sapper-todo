<script>
  import { all, pending, completed, todos } from "../store/todos";
  import Todo from "../components/Todo.svelte"
</script>

<svelte:head>
  <title>Todos</title>
</svelte:head>

<div>
  <h1>Some things to do</h1>

  {#await todos.fetch()}
    <p>Fetching todos...</p>
    {:then}
      {#if $todos.length}
        {#if $all.length}
          <h3>All</h3>
          <ul>
            {#each $all as todo}
              <Todo>{todo.text}</Todo>
            {/each}
          </ul>
        {/if}
        {#if $pending.length}
          <h3>Pending</h3>
          <ul>
            {#each $pending as todo}
              <Todo>{todo.text}</Todo>
            {/each}
          </ul>
        {/if}
        {#if $completed.length}
          <h3>Completed</h3>
          <ul>
            {#each $completed as todo}
              <Todo>{todo.text}</Todo>
            {/each}
          </ul>
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

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>