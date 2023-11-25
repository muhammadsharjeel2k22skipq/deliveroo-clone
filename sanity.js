import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    apiVersion: "2022-07-03",
    dataset: 'production',
    projectId: 'c8dxvvhp',
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source);
};
