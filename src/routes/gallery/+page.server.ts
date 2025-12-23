import { sanity } from "$lib/sanity/client";

export const prerender = true;

export async function load({ url }) {
    const category = url.searchParams.get('category');

    const query = `*[_type == "artwork"${category ? ` && category == $category` : ''}] | order(year desc, title asc) {
        title,
        "slug": slug.current,
        year,
        medium,
        dimensions,
        category,
        featured,
        images,
        description
    }`;

    const artworks = await sanity.fetch(query, category ? { category } : {});
    const categories = [...new Set(artworks.map((a: any) => a.category).filter(Boolean))];

    return {
        artworks,
        categories,
        category: category || undefined
    };
}