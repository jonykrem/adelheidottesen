// src/lib/categories.ts
export const ARTWORK_CATEGORIES = [
    { title: "Paintings", value: "paintings" },
    { title: "Graphics", value: "graphics" },
] as const;

export type ArtworkCategory = typeof ARTWORK_CATEGORIES[number]["value"];

export function categoryTitle(value: ArtworkCategory) {
    return ARTWORK_CATEGORIES.find((c) => c.value === value)?.title ?? value;
}