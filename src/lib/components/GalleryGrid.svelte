<script lang="ts">
    import ArtworkCard from "./ArtworkCard.svelte";
    import type { Artwork } from "$lib/utils/content";
    export let items: Artwork[];
</script>

<div class="grid">
    {#each items.filter((item) => item.slug) as item}
        <ArtworkCard {...item} />
    {/each}
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1.5rem;
    }
    @media (min-width: 1024px) {
        .grid {
            gap: 2rem;
        }
    }
</style>
