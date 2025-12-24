<script lang="ts">
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    import type { Artwork } from "$lib/utils/content";
    export let data: {
        artworks: Artwork[];
        categories: string[];
    };

    let selected: string = "";

    $: visible = selected
        ? data.artworks.filter((a): boolean => a.category === selected)
        : data.artworks;

    function setCategory(cat?: string) {
        selected = cat ?? "";
    }
</script>

<svelte:head>
    <title>Gallery</title>
    <meta name="description" content="Artwork gallery" />
</svelte:head>

<section class="page">
    <PageHeader title="Gallery">
        <label class="filter-label" for="filter"> Filter: </label>
        <select
            id="filter"
            bind:value={selected}
            on:change={(e) =>
                setCategory((e.target as HTMLSelectElement).value ?? undefined)}
        >
            <option value="">All</option>
            {#each data.categories as cat}
                <option value={cat}>{cat}</option>
            {/each}
        </select>
    </PageHeader>
    <GalleryGrid items={visible} />
</section>

<style>
    .filter-label {
        color: #6b7280;
        font-size: 0.9rem;
    }
</style>
