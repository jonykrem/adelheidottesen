<script lang="ts">
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    import type { Artwork } from "$lib/utils/content";
    import Page from "./about/+page.svelte";
    export let data: { featured: Artwork[] };
</script>

<svelte:head>
    <title>Adelheid Ottesen</title>
    <meta name="description" content="Featured artworks" />
</svelte:head>

<section class="page">
    <PageHeader title="Featured Works" />
    <GalleryGrid items={data.featured} />
</section>
