import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
    projectId: "dk1x31l2",
    dataset: "production",
    apiVersion: "2023-05-06",
    useCdn: true,
    token: process.env.SANITY_NEXT_TOKEN,
});
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
