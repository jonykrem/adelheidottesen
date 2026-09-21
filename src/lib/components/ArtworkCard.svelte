<script lang="ts">
    import ResponsiveImage from "./ResponsiveImage.svelte";
    import { urlFor } from "$lib/sanity/image";

    export let title: string;
    export let slug: string;
    export let year: number;
    export let images: any[] = [];

    $: imageUrl =
        images && images.length ? urlFor(images[0]).width(1200).url() : "";
</script>

{#if slug}
    <a
        href={`/gallery/${slug}`}
        aria-label={title}
        style="text-decoration:none; color:inherit;"
        data-sveltekit-preload-data="off"
    >
        <figure style="margin:0;">
            {#if imageUrl}
                <ResponsiveImage src={imageUrl} alt={title} />
            {/if}
            <figcaption
                class="caption"
            >
                {title}{year ? `, ${year}` : ""}
            </figcaption>
        </figure>
    </a>
{/if}

<style>
    .caption {
        margin-top: 0.5rem;
        color: var(--muted);
        font-size: 0.9rem;
    }
</style>
