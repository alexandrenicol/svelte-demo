<script lang="ts">
  import type { University } from "../../lib/University";
  import Character from "./Character.svelte";
  import { shortlistedUniversities } from "../../lib/store";

  export let university: University;

  function handleClick() {
    shortlistedUniversities.update((previousUniversities) => {
      return [...previousUniversities, university];
    });
  }
</script>

<div class="nes-container with-title">
  <p class="title">{university.name}</p>
  <Character />
  <p>{university.city}, {university.countryCode}</p>
  <button type="button" class="nes-btn is-success" on:click={handleClick}
    >Shortlist</button
  >
</div>
