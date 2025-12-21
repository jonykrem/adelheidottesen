import { defineType, defineField } from "sanity";

export default defineType({
    name: "artwork",
    title: "Artwork",
    type: "document",
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
                list: [
                    { title: "Painting", value: "painting" },
                    { title: "Drawing", value: "drawing" },
                    { title: "Mixed Media", value: "mixed-media" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "featured",
            title: "Featured",
            type: "boolean",
            initialValue: false,
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
            media: "images.0",
            subtitle: "year",
        },
    },
});