<script lang="ts">
    const email = "name@example.com";
    const links = [
        { label: "Instagram", url: "https://instagram.com/yourhandle" },
        { label: "Behance", url: "https://behance.net/yourhandle" },
    ];
</script>

<svelte:head>
    <title>Contact</title>
    <meta name="description" content="Get in touch" />
</svelte:head>

<section>
    <h2 style="font-weight:400; margin-bottom:1rem;">Contact</h2>
    <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    <ul style="list-style:none; padding:0; margin-top:0.5rem;">
        {#each links as l}
            <li style="margin:0.25rem 0;">
                <a href={l.url} rel="noopener" target="_blank">{l.label}</a>
            </li>
        {/each}
    </ul>
</section>
