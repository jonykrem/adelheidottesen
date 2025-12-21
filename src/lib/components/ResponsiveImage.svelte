<script lang="ts">
    export let src: string;
    export let alt: string = "";
    export let sizes: string =
        "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
    export let className: string = "";
</script>

<img
    {src}
    {alt}
    loading="lazy"
    decoding="async"
    {sizes}
    class={className}
    style="display:block; width:100%; height:auto;"
/>
