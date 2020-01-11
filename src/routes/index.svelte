<script>
  import { todos } from "../store/todos";
  import Todo from "../components/Todo.svelte"
</script>

<svelte:head>
  <title>Todos</title>
</svelte:head>

<div>
  <h1>Some things to do</h1>

  {#if $todos.length}
  <ul>
    {#each $todos as todo}
      <Todo>{todo}</Todo>
    {/each}
  </ul>
  {:else}
    <small>You have nothing to do</small>
  {/if}
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