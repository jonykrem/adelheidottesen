<script lang="ts">
    import ResponsiveImage from "./ResponsiveImage.svelte";
    export let title: string;
    export let slug: string;
    export let year: number;
    export let images: string[] = [];
</script>

<a
    href={`/gallery/${slug}`}
    aria-label={title}
    style="text-decoration:none; color:inherit;"
>
    <figure style="margin:0;">
        {#if images && images.length}
            <ResponsiveImage
                src={`/images/artworks/${images[0]}`}
                alt={title}
            />
        {/if}
        <figcaption style="margin-top:0.5rem; font-size:0.9rem; color:#4b5563;">
            {title}{year ? `, ${year}` : ""}
        </figcaption>
    </figure>
</a>
