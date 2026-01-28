<script lang="ts">
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    import { categoryTitle } from "$lib/categories";
    import type { ArtworkCategory } from "$lib/categories";
    import type { Artwork } from "$lib/utils/content";
    export let data: {
        artworks: Artwork[];
        categories: ArtworkCategory[];
    };

    let selected: ArtworkCategory = "paintings";

    $: visible = selected
        ? data.artworks.filter((a): boolean => a.category === selected)
        : data.artworks;

    function setCategory(cat: ArtworkCategory) {
        selected = cat;
    }
</script>

<svelte:head>
    <title>Gallery</title>
    <meta name="description" content="Artwork gallery" />
</svelte:head>

<section class="page">
    <PageHeader>
        <select
            id="filter"
            class="category-filter"
            bind:value={selected}
            on:change={(e) =>
                setCategory(
                    (e.target as HTMLSelectElement).value as ArtworkCategory,
                )}
        >
            {#each data.categories as cat}
                <option value={cat}>{categoryTitle(cat)}</option>
            {/each}
        </select>
    </PageHeader>
    <GalleryGrid items={visible} />
</section>

<style>
    .category-filter {
        font-size: 0.9rem;
        color: var(--muted);
        background: transparent;
        border: 1px solid #d1d5db;
        border-radius: 4px;
        padding: 0.15rem 0.4rem;
        line-height: 1.4;
    }
</style>
