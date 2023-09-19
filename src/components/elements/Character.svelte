<script lang="ts">
  const characters: string[] = [
    "nes-mario",
    "nes-ash",
    "nes-pokeball",
    "nes-bulbasaur",
    "nes-charmander",
    "nes-squirtle",
    "nes-kirby",
  ];

  const character = characters[Math.floor(Math.random() * characters.length)];
</script>

<i class={character} />
