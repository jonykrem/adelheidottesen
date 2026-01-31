import { getAllArtworks, getArtworkBySlug } from "$lib/utils/content";
import { error } from "@sveltejs/kit";

export const entries = async () => {
    const artworks = await getAllArtworks();

    const bad = artworks.filter(
        (a) => !a.slug || typeof a.slug !== "string"
    );

    console.log("BAD SLUGS:", bad);

    return artworks
        .filter((a) => a.slug && typeof a.slug === "string")
        .map((a) => ({ slug: a.slug }));
};

export async function load({ params }) {
    const artwork = await getArtworkBySlug(params.slug);

    if (!artwork) {
        throw error(404, "Artwork not found");
    }

    return { item: artwork };
}