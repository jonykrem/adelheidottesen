import { getAllArtworks, getArtworkBySlug } from "$lib/utils/content.js";
import { error } from "@sveltejs/kit";

export async function entries() {
    const artworks = await getAllArtworks();
    return artworks.map(a => ({ slug: a.slug }));
}

export async function load({ params }) {
    if (!params.slug || typeof params.slug !== 'string') {
        throw error(400, "Invalid slug parameter");
    }

    const slug = params.slug.trim();

    if (!slug) {
        throw error(400, "Invalid slug");
    }

    const artwork = await getArtworkBySlug(slug);

    if (!artwork) {
        throw error(404, "Artwork not found");
    }

    return { item: artwork };
}