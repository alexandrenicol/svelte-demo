<h1>Universities</h1>
<div class="switcher">
  <slot />
</div>

<style>
  .switcher {
    margin: 0 auto;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
</style>
