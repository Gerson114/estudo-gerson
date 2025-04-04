import { notFound } from "next/navigation";

type Post = {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  imageUrl?: string;
};

type Media = {
  source_url: string;
};

async function getPost(id: string) {
  try {
    const res = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/carros/${id}`, {
      cache: "no-store"
    });

    if (!res.ok) return null;

    const post = await res.json();

    // 👇 Verifica a estrutura retornada
    console.log("Post recebido:", post);

    let imageUrl = null;

    if (post.featured_media) {
      const mediares = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/media/${post.featured_media}`);
      const mediadata: Media = await mediares.json();
      imageUrl = mediadata.source_url;
    }

    return { ...post, imageUrl };
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    return null;
  }
}

export default async function CarroDetalhe({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post || !post.title?.rendered) return notFound();

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{post.title.rendered}</h2>
      {post.imageUrl && (
        <img src={post.imageUrl} alt="Imagem destacada" className="mb-4 rounded-lg" />
      )}
      <div dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered ?? "" }} />
    </div>
  );
}
