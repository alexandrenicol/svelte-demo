<script lang="ts">
  import { onMount } from "svelte";
  import ProgressBar from "./components/elements/ProgressBar.svelte";
  import Text from "./components/elements/Text.svelte";
  import UniversityCard from "./components/elements/UniversityCard.svelte";
  import Switcher from "./components/layout/Switcher.svelte";
  import type { University } from "./lib/University";
  import MyShortlists from "./components/elements/MyShortlists.svelte";

  let universityRequest: Promise<University[]>;

  async function getUniversities() {
    const res = await fetch(
      "https://64ce05640c01d81da3ee71e0.mockapi.io/university"
    );
    const universities: University[] = await res.json();
    if (res.ok) {
      return universities;
    } else {
      throw new Error("Whoops");
    }
  }

  onMount(() => {
    universityRequest = getUniversities();
  });
</script>

<main>
  {#if universityRequest}
    {#await universityRequest}
      <ProgressBar />
    {:then universities}
      <Switcher>
        {#each universities as university, index}
          <UniversityCard {university} />
        {/each}
      </Switcher>
    {:catch error}
      <Text variant="is-error">{error.message}</Text>
    {/await}
    <MyShortlists />
  {:else}
    <ProgressBar />
  {/if}
</main>

<style>
</style>
