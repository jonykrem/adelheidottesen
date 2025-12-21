import matter from 'gray-matter';
import { marked } from 'marked';

export type Artwork = {
    title: string;
    slug: string;
    year: number;
    medium: string;
    dimensions: string;
    category: string;
    featured?: boolean;
    images: string[];
    description?: string;
};

export type PageContent = {
    title: string;
    body: string; // HTML
};

function parseMarkdown(raw: string) {
    const { data, content } = matter(raw);
    const html = marked.parse(content, { async: false }) as string;
    return { data, html } as const;
}

export function getAllArtworks(): Artwork[] {
    const files = import.meta.glob('/src/content/artworks/*.md', { query: '?raw', import: 'default', eager: true });
    const items: Artwork[] = Object.entries(files).map(([path, raw]) => {
        const { data, html } = parseMarkdown(raw as string);
        const a: Artwork = {
            title: String(data.title || ''),
            slug: String(data.slug || ''),
            year: Number(data.year || 0),
            medium: String(data.medium || ''),
            dimensions: String(data.dimensions || ''),
            category: String(data.category || ''),
            featured: Boolean(data.featured),
            images: Array.isArray(data.images) ? (data.images as string[]) : [],
            description: html
        };
        return a;
    });
    // sort newest first by year, then title
    return items.sort((a, b) => (b.year - a.year) || a.title.localeCompare(b.title));
}

export function getArtworkBySlug(slug: string): Artwork | null {
    const all = getAllArtworks();
    return all.find((a) => a.slug === slug) ?? null;
}

export function getPage(name: 'about' | 'cv'): PageContent {
    const files = import.meta.glob('/src/content/pages/*.md', { query: '?raw', import: 'default', eager: true });
    const raw = files[`/src/content/pages/${name}.md`];
    if (!raw) return { title: name, body: '' };
    const { data, html } = parseMarkdown(raw as string);
    return {
        title: String((data as any).title || name),
        body: html
    };
}
