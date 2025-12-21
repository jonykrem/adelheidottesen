import { createClient } from "@sanity/client";

export const sanity = createClient({
    projectId: "vaix14a0",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: true,
});