import { defineMigration, at, set } from "sanity/migrate";

export default defineMigration({
  title: "Normalize artwork categories to paintings / graphics",
  documentTypes: ["artwork"],

  migrate: {
    document(doc) {
      if (doc.category === "painting") {
        return [at("category", set("paintings"))];
      }

      if (
        doc.category === "drawing" ||
        doc.category === "mixed-media"
      ) {
        return [at("category", set("graphics"))];
      }

      return;
    },
  },
});