"use client"
import { useEffect, useState } from "react"

type Post = {
  id: number
  meta: {
    marca: string
  }
}

export function FILTRO() {
  const [data, setData] = useState<Post[]>([])
  const [marcaSelecionada, setMarcaSelecionada] = useState<string | null>(null)

  useEffect(() => {
    const buscarPosts = async () => {
      try {
        const res = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/carros?_embed&per_page=100`)
        const posts: Post[] = await res.json()
        setData(posts)
      } catch (error) {
        console.log("Erro ao buscar posts:", error)
      }
    }

    buscarPosts()
  }, [])

  // Lista de marcas únicas
  const marcasUnicas = Array.from(new Set(data.map(item => item.meta?.marca).filter(Boolean)))

  // Filtrar por marca selecionada
  const postsFiltrados = marcaSelecionada
    ? data.filter(post => post.meta?.marca?.toLowerCase().trim() === marcaSelecionada.toLowerCase().trim())
    : data

  return (
    <>
      <section className="bg-[#F1F1F1] w-full">
        <div className="max-w-[1200px] w-full mx-auto flex flex-col lg:flex-row justify-between items-center gap-[35px] px-4 pb-[25px] pt-[25px]">
          <div>
            <h2 className="text-[24px] sm:text-[30px] font-[700] text-center lg:text-left">
              Filtrar por Marcas
            </h2>
          </div>
          <div className="bg-[#fff] h-auto max-w-[780px] w-full rounded-[15px] border-[1px] border-[#f5f5f5] p-4">
            <div className="flex flex-wrap gap-2">
              {marcasUnicas.map((marca, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setMarcaSelecionada(marca === marcaSelecionada ? null : marca)
                  }
                  className={`px-4 py-2 rounded-full border text-sm ${
                    marca === marcaSelecionada
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {marca}
                </button>
              ))}
            </div>

            {/* Lista de posts filtrados */}
            <div className="mt-4 space-y-2">
              {postsFiltrados.map(post => (
                <div key={post.id} className="p-2 bg-gray-100 rounded">
                  Marca: {post.meta?.marca}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
