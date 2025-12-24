<script lang="ts">
    export let title: string;
</script>

<header class="page-header">
    <h2 class="page-title">{title}</h2>
    <div class="page-actions">
        <slot />
    </div>
</header>

<style>
    .page-header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 2rem;
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
</style>
