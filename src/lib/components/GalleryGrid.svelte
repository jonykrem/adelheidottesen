<script lang="ts">
    import ArtworkCard from "./ArtworkCard.svelte";
    export let items: Array<{
        title: string;
        slug: string;
        year: number;
        images: string[];
        category?: string;
    }>;
</script>

<div class="grid">
    {#each items as item}
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
