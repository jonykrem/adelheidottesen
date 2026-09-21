import { sanity } from "$lib/sanity/client";
import { ARTWORK_CATEGORIES } from "$lib/categories";

export async function load() {
    const query = `*[_type == "artwork"]
        | order(year desc, orderRank asc, title asc) {
        title,
        "slug": slug.current,
        year,
        medium,
        dimensions,
        category,
        images,
        description
    }`;

    const artworks = await sanity.fetch(query);
    const categories = ARTWORK_CATEGORIES
        .filter((category) =>
            artworks.some((artwork: { category?: string }) =>
                artwork.category === category.value,
            ),
        )
        .map((category) => category.value);

    return {
        artworks,
        categories,
    };
}