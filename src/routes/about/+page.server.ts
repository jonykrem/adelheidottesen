import type { PageServerLoad } from './$types';
import { getPage } from '$lib/utils/content';

export const load: PageServerLoad = async () => {
    const page = await getPage('about');

    if (!page) {
        return {
            page: {
                title: 'About',
                body: []
            }
        };
    }

    return { page };
};
