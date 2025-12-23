import { sanity } from "$lib/sanity/client";
import { error } from "@sveltejs/kit";

export async function load() {
    const page = await sanity.fetch(
        `*[_type == "page" && slug.current == "cv"][0]{
            title,
            body
        }`
    );

    if (!page) {
        throw error(404, "Page not found");
    }

    return { page };
};
