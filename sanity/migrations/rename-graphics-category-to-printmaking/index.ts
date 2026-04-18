import { defineMigration } from "sanity/migrate";

export default defineMigration({
  title: "Rename graphics category to printmaking",

  migrate: {
    document(doc) {
      if (doc._type !== "artwork") return;

      if (doc.category !== "graphics") return;

      return {
        patch: {
          id: doc._id,
          set: {
            category: "printmaking",
          },
        },
      };
    },
  },
});