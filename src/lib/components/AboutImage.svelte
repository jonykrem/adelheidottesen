<script lang="ts">
    import { urlFor } from "$lib/sanity/image";

    export let portableText: {
        value: { asset?: unknown; alt?: string; caption?: string };
    };
</script>

{#if portableText.value?.asset}
    <figure class="about-image">
        <img
            src={urlFor(portableText.value).width(1200).url()}
            alt={portableText.value.alt ?? ""}
            loading="lazy"
            decoding="async"
        />
        {#if portableText.value.caption}
            <figcaption class="caption">
                {portableText.value.caption}
            </figcaption>
        {/if}
    </figure>
{/if}

<style>
    .about-image {
        margin: 2rem 0;
        max-width: 100%;
    }

    img {
        display: block;
        width: min(300px, 80vw);
        margin-inline: 0;
        height: auto;
    }

    .caption {
        width: min(300px, 80vw);
        margin-top: 0.5rem;
        color: var(--muted);
        font-size: 0.9rem;
        white-space: pre-line;
    }
</style>
