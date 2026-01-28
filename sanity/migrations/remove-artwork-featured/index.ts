import { defineMigration, at, unset } from "sanity/migrate";

export default defineMigration({
  title: "Remove featured field from artwork",
  documentTypes: ["artwork"],

  migrate: {
    document(doc) {
      if (doc.featured !== undefined) {
        return [at("featured", unset())];
      }

      return;
    },
  },
});