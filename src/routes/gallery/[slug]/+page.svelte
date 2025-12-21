<script lang="ts">
    export let data: { item: any };
    const a = data.item;
</script>

<svelte:head>
    <title>{a.title}</title>
    <meta
        name="description"
        content={`${a.title}${a.year ? `, ${a.year}` : ""}`}
    />
</svelte:head>

<article>
    <h2 style="font-weight:400; margin-bottom:0.5rem;">
        {a.title}{a.year ? `, ${a.year}` : ""}
    </h2>
    <p style="color:#6b7280; margin-top:0;">
        {a.medium}{a.dimensions ? ` • ${a.dimensions}` : ""}
    </p>

    {#if a.images && a.images.length}
        {#each a.images as img}
            <img
                src={`/images/artworks/${img}`}
                alt={a.title}
                loading="lazy"
                decoding="async"
                style="display:block; width:100%; height:auto; margin: 1rem 0;"
            />
        {/each}
    {/if}

    {#if a.description}
        <div class="prose" style="margin-top:1rem; max-width: 70ch;">
            {@html a.description}
        </div>
    {/if}
</article>
