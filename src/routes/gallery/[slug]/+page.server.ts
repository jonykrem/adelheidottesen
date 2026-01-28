import { getAllArtworks, getArtworkBySlug } from "$lib/utils/content.js";
import { error } from "@sveltejs/kit";

export async function entries() {
    const artworks = await getAllArtworks();
    return artworks.map(a => ({ slug: a.slug }));
}

export async function load({ params }) {
    const artwork = await getArtworkBySlug(params.slug);

    if (!artwork) {
        throw error(404, "Artwork not found");
    }

    return { item: artwork };
}