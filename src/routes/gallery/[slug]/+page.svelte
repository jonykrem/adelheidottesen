<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
    import { urlFor } from "$lib/sanity/image";
    import type { Artwork } from "$lib/utils/content";

    export let data: {
        item: Artwork;
        previous: Artwork | null;
        next: Artwork | null;
    };
    $: a = data.item;
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

    <p class="metadata">
        {a.medium}{a.dimensions ? ` • ${a.dimensions}` : ""}
    </p>

    <div class="artwork-view">
        <nav class="artwork-navigation" aria-label="Artwork navigation">
            {#if data.previous}
                <a
                    class="artwork-link previous-artwork"
                    href={`/gallery/${data.previous.slug}`}
                    aria-label={`Previous artwork: ${data.previous.title}`}
                    title={`Previous artwork: ${data.previous.title}`}
                >
                    <span aria-hidden="true">&#8592;</span>
                </a>
            {/if}

            {#if data.next}
                <a
                    class="artwork-link next-artwork"
                    href={`/gallery/${data.next.slug}`}
                    aria-label={`Next artwork: ${data.next.title}`}
                    title={`Next artwork: ${data.next.title}`}
                >
                    <span aria-hidden="true">&#8594;</span>
                </a>
            {/if}
        </nav>

        <div class="images">
            {#if a.images && a.images.length}
                {#each a.images as img}
                    <figure>
                        <img
                            src={urlFor(img).width(1200).url()}
                            alt={a.title}
                            loading="lazy"
                            decoding="async"
                        />

                        {#if img.caption}
                            <figcaption class="caption">
                                {img.caption}
                            </figcaption>
                        {/if}
                    </figure>
                {/each}
            {/if}
        </div>
    </div>

    {#if a.description}
        <div class="description">
            {@html a.description}
        </div>
    {/if}
</article>

<style>
    .caption {
        margin-top: 0.5rem;
        color: var(--muted);
        font-size: 0.9rem;
        white-space: pre-line;
    }

    .artwork-view {
        position: relative;
        display: grid;
        width: 100%;
        max-width: 960px;
        margin-inline: auto;
        grid-template-columns: 3rem minmax(0, 1fr) 3rem;
        grid-template-areas: "previous image next";
        align-items: flex-start;
        gap: clamp(0.75rem, 3vw, 2rem);
    }

    .images {
        min-width: 0;
        grid-column: 2;
        grid-area: image;
        flex: 1;
    }

    figure {
        margin: 1.5rem 0;
    }

    figure:first-child {
        margin-top: 0;
    }

    figure img {
        display: block;
        width: 100%;
        height: auto;
    }

    .artwork-navigation {
        display: contents;
    }

    .artwork-link {
        display: grid;
        position: sticky;
        top: 1.5rem;
        width: 3rem;
        aspect-ratio: 1;
        place-items: center;
        color: inherit;
        border: 1px solid var(--border);
        border-radius: 50%;
        text-decoration: none;
        font-size: 1.5rem;
        line-height: 1;
    }

    .previous-artwork {
        grid-area: previous;
    }

    .next-artwork {
        grid-area: next;
    }

    .artwork-link:hover,
    .artwork-link:focus-visible {
        background: var(--surface);
    }

    @media (max-width: 767px) {
        article {
            padding-bottom: calc(4.5rem + env(safe-area-inset-bottom));
        }

        .artwork-view {
            display: block;
        }

        .artwork-navigation {
            display: flex;
            position: fixed;
            z-index: 10;
            right: 0;
            bottom: 0;
            left: 0;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            padding-bottom: calc(0.5rem + env(safe-area-inset-bottom));
            background: color-mix(in srgb, var(--bg) 92%, transparent);
            border-top: 1px solid var(--border);
            backdrop-filter: blur(6px);
        }

        .artwork-link {
            position: static;
            width: 2.5rem;
            background: transparent;
        }

        .previous-artwork,
        .next-artwork {
            grid-area: auto;
        }

        .previous-artwork {
            margin-right: auto;
        }

        .next-artwork {
            margin-left: auto;
        }

        .description {
            margin-top: 1rem;
        }
    }

    .description {
        margin-top: 1rem;
        white-space: pre-line;
    }

    .metadata {
        margin-top: 0;
        color: var(--muted);
    }
</style>
