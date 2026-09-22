import { defineType } from "sanity";

export default defineType({
    title: "Block Content",
    name: "blockContent",
    type: "array",
    of: [
        { type: "block" },
        {
            type: "image",
            options: { hotspot: true },
            fields: [
                {
                    name: "caption",
                    title: "Caption / credit",
                    type: "text",
                    description: "Caption or image credit shown below the image",
                },
            ],
        },
    ],
});