<script lang="ts">
    export let title: string | undefined = undefined;
    export let showActions = false;
</script>

<header class="page-header" class:has-actions={showActions}>
    {#if title}
        <h2 class="page-title">{title}</h2>
    {/if}
    {#if showActions}
        <div class="page-actions">
            <slot />
        </div>
    {/if}
</header>

<style>
    .page-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 0;
    }

    .page-header.has-actions {
        margin-bottom: 2rem;
    }

    @media (max-width: 767px) {
        .page-header {
            margin-top: -0.75rem;
        }

        .page-header.has-actions {
            margin-bottom: 2rem;
        }
    }

    .page-title {
        flex: 1;
        font-weight: 400;
        margin: 0;
        text-align: left;
    }

    .page-actions {
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
        gap: 0.75rem;
        margin-left: auto;
    }

    @media (max-width: 767px) {
        .page-actions {
            justify-content: flex-end;
            margin-top: 0.5rem;
        }
    }
</style>
