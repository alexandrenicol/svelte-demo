<script lang="ts">
  import { shortlistedUniversities } from "../../lib/store";
</script>

<div class="nes-container is-rounded lists">
  <p>My shortlists:</p>
  <ul class="nes-list is-circle">
    {#each $shortlistedUniversities as university}
      <li>{university.name}</li>
    {/each}
  </ul>
</div>

<style>
  .lists {
    margin-top: var(--s1);
  }
</style>
