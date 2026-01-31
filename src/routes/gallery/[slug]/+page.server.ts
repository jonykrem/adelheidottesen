import { getArtworkBySlug } from "$lib/utils/content.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const artwork = await getArtworkBySlug(params.slug);

    if (!artwork) {
        throw error(404, "Artwork not found");
    }

    return { item: artwork };
}