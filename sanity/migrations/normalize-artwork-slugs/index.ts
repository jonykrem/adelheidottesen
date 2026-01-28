import { defineMigration, at, set } from "sanity/migrate";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export default defineMigration({
  title: "Normalize artwork slugs",
  documentTypes: ["artwork"],

  migrate: {
    document(doc) {
      const slug = doc.slug as { current?: string } | undefined;

      // If slug is missing but title exists → create slug
      if (!slug?.current && typeof doc.title === "string") {
        return [
          at(
            "slug",
            set({
              _type: "slug",
              current: slugify(doc.title),
            })
          ),
        ];
      }

      // If slug exists → normalize it
      if (typeof slug?.current === "string") {
        const normalized = slugify(slug.current);

        if (normalized !== slug.current) {
          return [
            at("slug.current", set(normalized)),
          ];
        }
      }

      return;
    },
  },
});