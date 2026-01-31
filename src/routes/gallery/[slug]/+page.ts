import { getAllArtworks } from "$lib/utils/content";

export const prerender = true;

export async function entries() {
    const artworks = await getAllArtworks();
    return artworks.map(a => ({ slug: a.slug }));
}