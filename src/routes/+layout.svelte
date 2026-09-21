<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";
    import type { LayoutData } from "./$types";
    export let data: LayoutData;

    let theme = "light";

    onMount(() => {
        theme = document.documentElement.dataset.theme ?? "light";
    });

    function toggleTheme() {
        theme = theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }
</script>

<div class="container">
    <header>
        <h1>
            <a href="/">{data?.siteTitle ?? "Artist Name"}</a>
        </h1>
        <nav>
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
            <button
                class="theme-toggle"
                type="button"
                aria-label={theme === "dark"
                    ? "Use light mode"
                    : "Use dark mode"}
                aria-pressed={theme === "dark"}
                title={theme === "dark" ? "Use light mode" : "Use dark mode"}
                onclick={toggleTheme}
            >
                {theme === "dark" ? "Light" : "Dark"}
            </button>
        </nav>
    </header>
    <slot />
</div>

<style>
    :root {
        --bg: #fafafa;
        --text: #111;
        --muted: #6b7280;
        --border: #d1d5db;
        --surface: #f3f4f6;
        color-scheme: light;
    }

    :global(:root[data-theme="dark"]) {
        --bg: #1f1f1f;
        --text: #ececf1;
        --muted: #a4a6b2;
        --border: #343541;
        --surface: #20212d;
        color-scheme: dark;
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

    h1 {
        font-weight: 500;
        letter-spacing: 0.5px;
    }

    h1 a {
        color: inherit;
        text-decoration: none;
    }

    /* Mobile-first header layout */
    header {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin-bottom: -0.5rem;
    }

    @media (max-width: 767px) {
        header {
            margin-bottom: 2rem;
        }
    }

    nav {
        margin-top: 0.25rem;
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

    .theme-toggle {
        margin: 0;
        padding: 0;
        color: var(--muted);
        background: none;
        border: 0;
        font: inherit;
        cursor: pointer;
    }

    .theme-toggle:hover,
    .theme-toggle:focus-visible {
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

        .theme-toggle {
            margin-left: 1.5rem;
        }
    }
</style>
