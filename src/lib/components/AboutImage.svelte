<script lang="ts">
    import { urlFor } from "$lib/sanity/image";

    export let portableText: { value: { asset?: unknown; alt?: string } };
</script>

{#if portableText.value?.asset}
    <figure class="about-image">
        <img
            src={urlFor(portableText.value).width(1200).url()}
            alt={portableText.value.alt ?? ""}
            loading="lazy"
            decoding="async"
        />
    </figure>
{/if}

<style>
    .about-image {
        margin: 2rem 0;
        max-width: 100%;
    }

    img {
        display: block;
        width: min(100%, 520px);
        height: auto;
    }

    @media (max-width: 600px) {
        img {
            width: 100%;
        }
    }
</style>
