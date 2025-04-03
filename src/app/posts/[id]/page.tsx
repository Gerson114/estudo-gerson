import { notFound } from "next/navigation";

async function getPost(id: string | undefined) {
  if (!id) return null;

  try {
    // Usando apenas "no-store" para garantir dados sempre atualizados
    const res = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/posts/${id}`, {
      cache: "no-store", // Remove revalidate para evitar conflito
    });

    if (!res.ok) return null;
    const post = await res.json();

    let imageUrl = null;
    if (post.featured_media) {
      const mediaRes = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/media/${post.featured_media}`, {
        cache: "no-store",
      });

      if (mediaRes.ok) {
        const mediaData = await mediaRes.json();
        imageUrl = mediaData.source_url;
      }
    }

    return { post, imageUrl };
  } catch {
    return null;
  }
}

export default async function Detalhes({ params }: { params: Promise<{ id?: string }> }) {
  const resolvedParams = await params; // Garante que params está pronto
  if (!resolvedParams?.id) return notFound();

  const data = await getPost(resolvedParams.id);
  if (!data) return notFound();

  const { post, imageUrl } = data;

  return (
    <div>
      <h1>{post.title.rendered}</h1>

      {imageUrl && (
        <img
          src={imageUrl}
          alt={post.title.rendered}
          className="w-full max-w-lg rounded-lg shadow-lg"
        />
      )}

      {/* Normaliza o conteúdo para evitar problemas de hidratação */}
      <div
        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/\n/g, " ") }}
        suppressHydrationWarning
      />
    </div>
  );
}
