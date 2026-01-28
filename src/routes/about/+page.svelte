<script lang="ts">
    import { PortableText } from "@portabletext/svelte";
    import PageHeader from "$lib/components/PageHeader.svelte";
    export let data: { page: { title: string; body: any } };
</script>

<svelte:head>
    <title>{data.page.title}</title>
</svelte:head>

<article>
    <PageHeader />
    <PortableText value={data.page.body} />
</article>
