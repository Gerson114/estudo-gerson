import React from "react";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'TITULO METADATA',
  description: 'aprenda a usare o meta daata',
}
 
type Post = {
  id: string;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
  featured_media: number;
};

type Media = {
  source_url: string;
};

export default async function Contato() {
  const res = await fetch("https://head.agenciaplanner.dev/wp-json/wp/v2/posts");
  const posts: Post[] = await res.json();

  // Buscar imagens destacadas
  const postsWithImages = await Promise.all(
    posts.map(async (post, index) => {
      let imageUrl = null;

      if (post.featured_media) {
        try {
          const mediaRes = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/media/${post.featured_media}`);
          const mediaData: Media = await mediaRes.json();
          imageUrl = mediaData.source_url;
        } catch (error) {
          console.error(`Erro ao buscar imagem para post ${post.id}`, error);
        }
      }

      return { ...post, imageUrl, uniqueKey: `${post.id}-${index}` };
    })
  );

  return (
    <div className="flex justify-center">
    <div className="w-full max-w-6xl">
      <h1 className="text-center text-2xl font-bold mb-6">Lista de Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {postsWithImages.map((post) => (
          <li key={post.uniqueKey} className="bg-[#f2f2f2] p-4 rounded-lg shadow-md">
            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt={post.title.rendered}
                className="w-full h-48 object-cover rounded-lg"
              />
            )}
            <a href={`/posts/${post.id}`} className="block text-blue-500 hover:underline mt-2">
              <h2 className="text-lg font-semibold">{post.title.rendered}</h2>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
}
