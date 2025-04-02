"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function Detalhes() {
  const params = useParams();
  const id = params?.id as string;

  const [post, setPost] = useState<{
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    featured_media: number;
  } | null>(null);

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/posts?search=${id}`);
        if (!res.ok) throw new Error("Erro ao buscar post");

        const data = await res.json();
        if (data.length === 0) throw new Error("Post não encontrado");

        const postData = data[0];
        setPost(postData);

        // Buscar imagem destacada se houver
        if (postData.featured_media) {
          const mediaRes = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/media/${postData.featured_media}`);
          const mediaData = await mediaRes.json();
          setImageUrl(mediaData.source_url);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <h1>Carregando...</h1>;
  if (error || !post) return <h1>Erro ao carregar o post</h1>;

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      {imageUrl && <img src={imageUrl} alt={post.title.rendered} className="w-full max-w-lg rounded-lg shadow-lg" />}
      <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
    </div>
  );
}
