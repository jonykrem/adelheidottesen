import type { PageServerLoad } from './$types';
import { getArtworkBySlug } from '$lib/utils/content';

export const load: PageServerLoad = async ({ params }) => {
    const item = getArtworkBySlug(params.slug);
    if (!item) {
        return { status: 404 } as any;
    }
    return { item };
};
