<script lang="ts">
    import PageHeader from "$lib/components/PageHeader.svelte";
    import { PortableText } from "@portabletext/svelte";
    export let data: { page: { title: string; body: any } };
</script>

<svelte:head>
    <title>{data.page.title}</title>
</svelte:head>

<article>
    <PageHeader title={data.page.title} />
    <PortableText value={data.page.body} />
</article>
