<script lang="ts">
    import { page } from "$app/state";
    import type { PageData } from "./$types";
    export let data: PageData;
    $: currentPath = page.url.pathname;
</script>

<div class="container">
    <header>
        <h1 style="font-weight:500; letter-spacing:0.5px;">
            {data?.siteTitle ?? "Artist Name"}
        </h1>
        <nav>
            <a href="/" aria-current={currentPath === "/" ? "page" : undefined}
                >Home</a
            >
            <a
                href="/gallery"
                aria-current={currentPath.startsWith("/gallery")
                    ? "page"
                    : undefined}>Gallery</a
            >
            <a
                href="/about"
                aria-current={currentPath === "/about" ? "page" : undefined}
                >About</a
            >
            <a
                href="/cv"
                aria-current={currentPath === "/cv" ? "page" : undefined}>CV</a
            >
            <a
                href="/contact"
                aria-current={currentPath === "/contact" ? "page" : undefined}
                >Contact</a
            >
        </nav>
    </header>
    <slot />
</div>

<style>
    :root {
        --bg: #fafafa;
        --text: #111;
        --muted: #6b7280;
    }
    :global(html),
    :global(body) {
        background: var(--bg);
        color: var(--text);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
        line-height: 1.6;
    }
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem 1rem;
    }
    header {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: 2rem;
    }
    nav a {
        margin-left: 1rem;
        color: var(--muted);
        text-decoration: none;
    }
    nav a:hover,
    nav a[aria-current="page"] {
        color: var(--text);
    }
</style>
