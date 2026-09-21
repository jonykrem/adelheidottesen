import { getAllArtworks, getArtworkBySlug } from "$lib/utils/content";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
    const [artworks, artwork] = await Promise.all([
        getAllArtworks(),
        getArtworkBySlug(params.slug),
    ]);

    if (!artwork) {
        throw error(404, "Artwork not found");
    }

    const currentIndex = artworks.findIndex((item) => item.slug === params.slug);
    const previous = currentIndex > 0 ? artworks[currentIndex - 1] : null;
    const next = currentIndex >= 0 ? artworks[currentIndex + 1] ?? null : null;

    return { item: artwork, previous, next };
}