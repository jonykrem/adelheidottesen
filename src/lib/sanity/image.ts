import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import { sanity } from "./client";

const builder = createImageUrlBuilder(sanity);

export function urlFor(source: SanityImageSource) {
    return builder.image(source);
}