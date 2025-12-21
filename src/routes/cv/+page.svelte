<script lang="ts">
    export let data: { page: { title: string; body: string } };
</script>

<svelte:head>
    <title>{data.page.title}</title>
</svelte:head>

<article>
    <h2 style="font-weight:400; margin-bottom:1rem;">{data.page.title}</h2>
    <div class="prose" style="max-width:70ch;">
        {@html data.page.body}
    </div>
</article>
