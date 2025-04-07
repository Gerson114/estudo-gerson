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
    const res = await fetch("https://head.agenciaplanner.dev/wp-json/wp/v2/carros?per_page=100");
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
        <div className="flex justify-center bg-[#f2f2f2] py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-4">
          {postimg.map((post) => (
            <div
              key={post.uniquekey}
              className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
            >
              {post.imageUrl && (
                <img
                  src={post.imageUrl}
                  alt="Imagem do post"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-lg font-semibold text-center mb-2">
                {post.title.rendered}
              </h2>
              <a
                href={`/produtos/${post.id}`}
                className="text-blue-600 hover:underline"
              >
                Ver mais
              </a>
            </div>
          ))}
        </div>
      </div>
      
    );
}
