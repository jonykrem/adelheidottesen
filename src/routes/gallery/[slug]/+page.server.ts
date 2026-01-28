import { getArtworkBySlug } from "$lib/utils/content.js";
import { error } from "@sveltejs/kit";

export const prerender = false;

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