export const prerender = 'auto';

import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
    return {
        siteTitle: 'Adelheid Ottesen'
    };
};
