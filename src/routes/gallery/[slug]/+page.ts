import { getAllArtworks } from "$lib/utils/content";

export const prerender = true;

export const entries = async () => {
    const artworks = await getAllArtworks();
    return artworks.map((a) => ({ slug: a.slug }));
};