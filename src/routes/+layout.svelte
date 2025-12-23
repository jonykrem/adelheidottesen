<script lang="ts">
    import { page } from "$app/stores";
    import type { PageData } from "./$types";
    export let data: PageData;
</script>

<div class="container">
    <header>
        <h1 style="font-weight:500; letter-spacing:0.5px;">
            {data?.siteTitle ?? "Artist Name"}
        </h1>
        <nav>
            <a
                href="/"
                aria-current={$page.url.pathname === "/" ? "page" : undefined}
                >Home</a
            >
            <a
                href="/gallery"
                aria-current={$page.url.pathname.startsWith("/gallery")
                    ? "page"
                    : undefined}>Gallery</a
            >
            <a
                href="/about"
                aria-current={$page.url.pathname === "/about"
                    ? "page"
                    : undefined}>About</a
            >
            <a
                href="/cv"
                aria-current={$page.url.pathname === "/cv" ? "page" : undefined}
                >CV</a
            >
            <a
                href="/contact"
                aria-current={$page.url.pathname === "/contact"
                    ? "page"
                    : undefined}>Contact</a
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

    /* Mobile-first header layout */
    header {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin-bottom: 2rem;
    }

    nav {
        margin-top: 0.75rem;
    }

    nav a {
        margin-right: 1rem;
        color: var(--muted);
        text-decoration: none;
    }

    nav a:hover,
    nav a[aria-current="page"] {
        color: var(--text);
    }

    /* Desktop layout */
    @media (min-width: 768px) {
        header {
            flex-direction: row;
            align-items: center;
        }

        nav {
            margin-top: 0;
            margin-left: auto;
        }

        nav a {
            margin-right: 0;
            margin-left: 1.5rem;
        }
    }
</style>
