import type { PageLoad } from './$types';
import { getArtworkBySlug } from '$lib/utils/content';

export const load: PageLoad = async ({ params }) => {
    const item = getArtworkBySlug(params.slug);
    if (!item) {
        return { status: 404 } as any;
    }
    return { item };
};
