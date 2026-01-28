<script lang="ts">
    export let title: string | undefined = undefined;
</script>

<header class="page-header">
    {#if title}
        <h2 class="page-title">{title}</h2>
    {/if}
    <div class="page-actions">
        <slot />
    </div>
</header>

<style>
    .page-header {
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        margin-bottom: 2rem;
    }

    @media (max-width: 767px) {
        .page-header {
            margin-top: -1.75rem;
            margin-bottom: 1rem;
        }
    }

    .page-title {
        font-weight: 400;
        margin: 0;
    }

    .page-actions {
        display: flex;
        align-items: baseline;
        gap: 0.75rem;
    }

    @media (max-width: 767px) {
        .page-actions {
            justify-content: flex-end;
            width: 100%;
            margin-top: 0.5rem;
        }
    }
</style>
