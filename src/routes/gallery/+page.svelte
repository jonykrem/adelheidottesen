<script lang="ts">
    import GalleryGrid from "$lib/components/GalleryGrid.svelte";
    import { browser } from "$app/environment";
    export let data: {
        artworks: any[];
        category?: string;
        categories: string[];
    };
    $: selected = browser
        ? new URLSearchParams(window.location.search).get("category") || ""
        : "";
    $: visible = selected
        ? data.artworks.filter((a) => a.category === selected)
        : data.artworks;
    function setCategory(cat?: string) {
        const base = "/gallery";
        const url = cat ? `${base}?category=${encodeURIComponent(cat)}` : base;
        window.location.href = url;
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
                on:change={(e) =>
                    setCategory(
                        (e.target as HTMLSelectElement).value || undefined,
                    )}
            >
                <option value="">All</option>
                {#each data.categories as cat}
                    <option value={cat} selected={data.category === cat}
                        >{cat}</option
                    >
                {/each}
            </select>
        </div>
    </div>
    <GalleryGrid items={visible} />
</section>
