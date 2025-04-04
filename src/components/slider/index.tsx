"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Post = {
  id: string;
  title: { rendered: string };
  featured_media: number;
  imageUrl?: string | null;
};

type Media = {
  source_url: string;
};

const Slider: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://head.agenciaplanner.dev/wp-json/wp/v2/posts");

        if (!res.ok) throw new Error("Erro ao buscar posts");

        const postsData: Post[] = await res.json();

        const postsWithImages = await Promise.all(
          postsData.map(async (post) => {
            let imageUrl = null;

            if (post.featured_media && post.featured_media !== 0) {
              try {
                const mediaRes = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/media/${post.featured_media}`);

                if (!mediaRes.ok) throw new Error("Erro ao buscar imagem");

                const mediaData: Media = await mediaRes.json();
                imageUrl = mediaData.source_url;
              } catch (error) {
                console.error(`Erro ao buscar imagem para post ${post.id}`, error);
              }
            }

            return { ...post, imageUrl };
          })
        );

        setPosts(postsWithImages);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar posts", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <p className="text-center text-lg">Carregando posts...</p>;
  }

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-[1200px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <div className="bg-[#f2f2f2] p-4 rounded-lg shadow-md">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title.rendered}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-48 flex items-center justify-center bg-gray-300 rounded-lg">
                    <p className="text-gray-700">Sem imagem</p>
                  </div>
                )}
                <h2 className="text-lg font-semibold mt-[25px] text-[25px]">{post.title.rendered}</h2>
                <a
                  href={`/posts/${post.id}`}
                  className="block  hover:underline mt-[15px] bg-[#000] p-[10px] text-[#fff] w-[100px] text-center rounded-[8px]  "
                >
                  Saiba mais
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
