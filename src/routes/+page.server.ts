import type { PageServerLoad } from './$types';
import { getAllArtworks } from '$lib/utils/content';

export const load: PageServerLoad = async () => {
    const artworks = getAllArtworks();
    const featured = artworks.filter((a) => a.featured);
    return { featured };
};
