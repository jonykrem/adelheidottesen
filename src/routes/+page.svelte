<script lang="ts">
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import type { Artwork } from "$lib/utils/content";
    export let data: { featured: Artwork[] };
</script>

<svelte:head>
    <title>Adelheid Ottesen</title>
    <meta name="description" content="Featured artworks" />
</svelte:head>

<section>
    <h2 style="font-weight:400; margin: 2rem 0 1rem;">Featured Works</h2>
    <GalleryGrid items={data.featured} />
</section>
