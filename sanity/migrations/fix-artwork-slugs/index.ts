import { defineMigration } from "sanity/migrate";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
}

export default defineMigration({
  title: "Fix missing artwork slugs",

  migrate: {
    document(doc, context) {
      if (doc._type !== "artwork") return;

      const slugValue =
        typeof doc.slug === "object" && doc.slug && "current" in doc.slug
          ? (doc.slug as any).current
          : undefined;

      if (slugValue) return;

      if (typeof doc.title !== "string") {
        console.warn(`Artwork ${doc._id} has no valid title — skipping`);
        return;
      }

      const slug = slugify(doc.title);

      return {
        patch: {
          id: doc._id,
          set: {
            slug: {
              _type: "slug",
              current: slug
            }
          }
        }
      };
    }
  }
});