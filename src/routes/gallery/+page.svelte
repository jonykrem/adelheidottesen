<script lang="ts">
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    import { categoryTitle } from "$lib/categories";
    import type { ArtworkCategory } from "$lib/categories";
    import type { Artwork } from "$lib/utils/content";
    export let data: {
        artworks: Artwork[];
        categories: ArtworkCategory[];
    };

    function categoryFromUrl(value: string | null): ArtworkCategory {
        return data.categories.includes(value as ArtworkCategory)
            ? (value as ArtworkCategory)
            : (data.categories[0] ?? "paintings");
    }

    $: selected = categoryFromUrl($page.url.searchParams.get("category"));

    $: visible = selected
        ? data.artworks.filter((a): boolean => a.category === selected)
        : data.artworks;

    function setCategory(cat: ArtworkCategory) {
        goto(`/gallery?category=${encodeURIComponent(cat)}`);
    }
</script>

<svelte:head>
    <title>Gallery</title>
    <meta name="description" content="Artwork gallery" />
</svelte:head>

<section class="page">
    <PageHeader showActions>
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
        border: 1px solid var(--border);
        border-radius: 4px;
        padding: 0.15rem 0.4rem;
        line-height: 1.4;
    }
</style>
