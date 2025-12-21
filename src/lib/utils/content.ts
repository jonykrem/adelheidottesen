import { sanity } from "$lib/sanity/client";

export type Artwork = {
    title: string;
    slug: string;
    year: number;
    medium: string;
    dimensions: string;
    category: string;
    featured?: boolean;
    images: any[];
    description?: string | null;
};

export type PageContent = {
    title: string;
    body: any;
};

export async function getAllArtworks(): Promise<Artwork[]> {
    const query = `*[_type == "artwork"] | order(year desc, title asc) {
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
    return artworks;
}

export async function getArtworkBySlug(slug: string): Promise<Artwork | null> {
    const query = `*[_type == "artwork" && slug.current == $slug][0] {
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
    const artwork = await sanity.fetch(query, { slug });
    return artwork ?? null;
}

export async function getPage(slug: 'about' | 'cv'): Promise<PageContent | null> {
    const query = `*[_type == "page" && slug.current == $slug][0]{
        title,
        body
    }`;

    const page = await sanity.fetch(query, { slug });

    if (!page) return null;

    return {
        title: page.title,
        body: page.body
    };
}
