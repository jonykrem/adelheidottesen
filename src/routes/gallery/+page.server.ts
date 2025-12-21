import type { PageServerLoad } from './$types';
import { getAllArtworks } from '$lib/utils/content';

export const load: PageServerLoad = async () => {
    const artworks = getAllArtworks();
    const categories = Array.from(new Set(artworks.map((a) => a.category))).sort();
    return { artworks, categories };
};
