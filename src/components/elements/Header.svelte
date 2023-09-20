<script lang="ts">
  export let pageTitle: string = "default title";
</script>

<header>{pageTitle}</header>

<style>
  header {
    height: 3rem;
    width: 100vw;
    margin-bottom: 1rem;
    padding: 0.5rem;
    background-color: var(--colour-primary);
    color: var(--colour-white);
  }
</style>
