<script lang="ts">
    import { PortableText } from "@portabletext/svelte";
    import AboutImage from "$lib/components/AboutImage.svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    export let data: { page: { title: string; body: any } };
</script>

<svelte:head>
    <title>{data.page.title}</title>
</svelte:head>

<article>
    <PageHeader />
    <PortableText
        value={data.page.body}
        components={{ types: { image: AboutImage } }}
    />
</article>
