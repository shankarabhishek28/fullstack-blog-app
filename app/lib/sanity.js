import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
 // optional if you want type safety

export const client = createClient({
  apiVersion: "2024-07-01", // updated to a recent date
  dataset: "production",
  projectId: "cblehcox", // ✅ your correct project ID
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// Better type than `any`
export function urlFor(source) {
  return builder.image(source);
}
