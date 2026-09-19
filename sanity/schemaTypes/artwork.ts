import { defineType, defineField } from "sanity";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { ARTWORK_CATEGORIES } from "../../src/lib/categories";

export default defineType({
    name: "artwork",
    title: "Artwork",
    type: "document",
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "year",
            title: "Year",
            type: "number",
            validation: (Rule) =>
                Rule.required().min(1900).max(new Date().getFullYear()),
        }),

        orderRankField({ type: "artwork", hidden: true }),

        defineField({
            name: "medium",
            title: "Medium",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "dimensions",
            title: "Dimensions",
            type: "string",
        }),

        defineField({
            name: "category",
            title: "Category",
            type: "string",
            options: {
                list: [...ARTWORK_CATEGORIES],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [
                {
                    type: "image",
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: "caption",
                            title: "Caption",
                            type: "text",
                            description: "Billedtekst (linjeskift bevares)",
                        },
                    ],
                },
            ],
            validation: (Rule) => Rule.min(1),
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],

    preview: {
        select: {
            title: "title",
            media: "images.0.asset",
            year: "year",
            category: "category",
        },
        prepare({ title, media, year, category }) {
            return {
                title,
                media,
                subtitle: `${year} · ${category}`,
            };
        },
    }
});