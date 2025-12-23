<script lang="ts">
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import { goto } from "$app/navigation";
    import type { Artwork } from "$lib/utils/content";
    export let data: {
        artworks: Artwork[];
        categories: string[];
    };

    let selected: string = "";

    $: visible = selected
        ? data.artworks.filter((a) => a.category === selected)
        : data.artworks;

    function setCategory(cat?: string) {
        selected = cat ?? "";
    }
</script>

<svelte:head>
    <title>Gallery</title>
    <meta name="description" content="Artwork gallery" />
</svelte:head>

<section>
    <div
        style="display:flex; align-items:center; justify-content:space-between; margin-bottom:1rem;"
    >
        <h2 style="font-weight:400;">Gallery</h2>
        <div>
            <label for="filter" style="margin-right:0.5rem; color:#6b7280;"
                >Filter:</label
            >
            <select
                id="filter"
                bind:value={selected}
                on:change={(e) =>
                    setCategory(
                        (e.target as HTMLSelectElement).value || undefined,
                    )}
            >
                <option value="">All</option>
                {#each data.categories as cat}
                    <option value={cat}>{cat}</option>
                {/each}
            </select>
        </div>
    </div>
    <GalleryGrid items={visible} />
</section>
