import React from "react";

type Post = {
  id: number;
  title: { rendered: string };
  slug: string;
  excerpt: { rendered: string };
};

export default async function Contato() {
  const res = await fetch("https://head.agenciaplanner.dev/wp-json/wp/v2/posts");
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>Lista de Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.slug}`}>{post.title.rendered}</a>
           
          </li>
        ))}
      </ul>
    </div>
  );
}