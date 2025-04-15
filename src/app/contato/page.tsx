"use client";
import { useState, useEffect } from "react";

type Post = {
  id: number;
  title: { rendered: string };
  meta: {
    km: string;
    ano: number;
    marca: string;
  };
};

export default function Contato() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [busca, setBusca] = useState("");
  const [filtroMarca, setFiltroMarca] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          "https://head.agenciaplanner.dev/wp-json/wp/v2/carros?_embed&per_page=50"
        );
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar os carros:", error);
      }
    };

    fetchPosts();
  }, []);

  // Marcas únicas disponíveis
  const marcas = ["Honda","bmw","fiat"];
  const marcaunica = Array.from(
    new Set(posts.map((post) => post.meta.marca))
  ).filter(Boolean)

  // Filtro final
  const postsFiltrados = posts.filter((post) => {
    const correspondeBusca = post.title.rendered
      .toLowerCase()
      .includes(busca.toLowerCase());
    const correspondeMarca = filtroMarca ? post.meta.marca === filtroMarca : true;
    return correspondeBusca && correspondeMarca;
  });

  return (
    <div className="flex">
      {/* Sidebar de Filtros */}
      <div className="w-[400px] bg-amber-600 p-6">
        <h2 className="text-center text-[24px] mb-4">Filtrar Veículos</h2>

        <input
          className="border p-2 rounded-[10px] w-full mb-4"
          type="text"
          placeholder="Buscar por nome..."
          onChange={(ev) => setBusca(ev.target.value)}
          value={busca}
        />

        <hr className="w-full mb-4" />

        <h3 className="text-[18px] mb-2">Marcas</h3>
        <div className="grid grid-cols-2 gap-2">
          {marcasDisponiveis.map((marca) => (
            <button
              key={marca}
              className={`p-2 rounded-[10px] border-2 ${
                filtroMarca === marca
                  ? "bg-white text-black border-black"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setFiltroMarca(marca)}
            >
              {marca}
            </button>
          ))}
        </div>

        {filtroMarca && (
          <button
            className="mt-4 bg-red-500 text-white p-2 rounded-[10px] w-full"
            onClick={() => setFiltroMarca(null)}
          >
            Limpar filtro de marca
          </button>
        )}
      </div>

      {/* Lista de Carros */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {postsFiltrados.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg shadow-md p-4 bg-white"
            >
              <h3 className="text-lg font-bold mb-2">
                {post.title.rendered}
              </h3>
              <p>Ano: {post.meta.ano}</p>
              <p>KM: {post.meta.km}</p>
              <p>Marca: {post.meta.marca}</p>
            </div>
          ))}

          {postsFiltrados.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              Nenhum veículo encontrado.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
