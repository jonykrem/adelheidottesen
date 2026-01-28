<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
    import { urlFor } from "$lib/sanity/image";
    import type { Artwork } from "$lib/utils/content";

    export let data: { item: Artwork };
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
    <PageHeader title="{a.title}{a.year ? `, ${a.year}` : ''}" />

    <p style="color:#6b7280; margin-top:0;">
        {a.medium}{a.dimensions ? ` • ${a.dimensions}` : ""}
    </p>

    {#if a.images && a.images.length}
        {#each a.images as img}
            <figure style="margin: 1.5rem 0;">
                <img
                    src={urlFor(img).width(1200).url()}
                    alt={a.title}
                    loading="lazy"
                    decoding="async"
                    style="display:block; width:100%; height:auto;"
                />

                {#if img.caption}
                    <figcaption class="caption">
                        {img.caption}
                    </figcaption>
                {/if}
            </figure>
        {/each}
    {/if}

    {#if a.description}
        <div class="description">
            {@html a.description}
        </div>
    {/if}
</article>

<style>
    .caption {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #6b7280;
        white-space: pre-line;
    }

    .description {
        margin-top: 1rem;
        white-space: pre-line;
    }
</style>
