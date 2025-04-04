import React from "react";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "produtos",
    description: "meus produtos"
}

type Post = {
    id: number
    title: { rendered: string }
    featured_media: number
    excerpt: { rendered: string }
}

type Media = {
    source_url: string
}

export default async function Produto() {
    const res = await fetch("https://head.agenciaplanner.dev/wp-json/wp/v2/carros");
    const posts: Post[] = await res.json();

    const postimg = await Promise.all(
        posts.map(async (post, index) => {
            let imageUrl = null;

            if (post.featured_media) {
                try {
                    const imageres = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/media/${post.featured_media}`);
                    const metaData: Media = await imageres.json();
                    imageUrl = metaData.source_url;
                } catch (error) {
                    console.log(`erro companheiro ${post.id}-${index} `, error);
                }
            }

            return { ...post, imageUrl, uniquekey: `${post.id}-${index}` };
        })
    );

    return (
        <div>
            {postimg.map((post) => (
                <div key={post.uniquekey}>
                    {post.imageUrl && (
                        <img src={post.imageUrl} alt="Imagem do post" />
                    )}
                    <h2>{post.title.rendered}</h2>
                    <a href={`/produtos/${post.id}`}>Ver mais</a>
                </div>
            ))}
        </div>
    );
}
