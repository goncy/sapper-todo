<script>
  export let onComplete = null;

  let pending;
</script>

<li>
  <slot></slot>
  {#if onComplete}
    {#await pending}
        <span>[completing]</span>
      {:then}
        <span on:click={() => pending = onComplete()}>[X]</span>
    {/await}
  {/if}
</li>

<style>
  li {
    color: orangered;
  }
</style>
