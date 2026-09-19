import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: "vaix14a0",
    dataset: import.meta.env.VITE_SANITY_DATASET || "production",
    apiVersion: "2024-01-01",
    useCdn: !import.meta.env.DEV,
});