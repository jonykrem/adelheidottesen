import { sanity } from "$lib/sanity/client";

export async function load() {
    const query = `*[_type == "artwork"]
        | order(year desc, title asc) {
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

    const artworks = await sanity.fetch(query);
    const categories = [...new Set(artworks.map((a: any) => a.category).filter(Boolean))];

    return {
        artworks,
        categories
    };
}