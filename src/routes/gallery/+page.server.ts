import type { PageLoad } from './$types';
import { getAllArtworks } from '$lib/utils/content';

export const load: PageLoad = async () => {
    const artworks = getAllArtworks();
    const categories = Array.from(new Set(artworks.map((a) => a.category))).sort();
    return { artworks, categories };
};
