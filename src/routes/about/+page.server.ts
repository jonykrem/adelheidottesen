import type { PageLoad } from './$types';
import { getPage } from '$lib/utils/content';

export const load: PageLoad = async () => {
    return { page: getPage('about') };
};
