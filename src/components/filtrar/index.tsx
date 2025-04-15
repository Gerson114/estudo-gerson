"use client"
import { useEffect, useState } from "react"

type Post = {
  id: number
  title: { rendered: string }
  meta: {
    marca: string
    ano:number
    combustivel:string
    km:string
    preco:number


  }
  _embedded?: {
    "wp:featuredmedia"?: {
      source_url: string
    }[]
  }
}

export function FILTRO() {
  const [data, setData] = useState<Post[]>([])
  const [marcaSelecionada, setMarcaSelecionada] = useState<string | null>(null)

  useEffect(() => {
    const buscarPosts = async () => {
      try {
        const res = await fetch(`https://head.agenciaplanner.dev/wp-json/wp/v2/carros?_embed&per_page=4`)
        const posts: Post[] = await res.json()
        setData(posts)
      } catch (error) {
        console.log("Erro ao buscar posts:", error)
      }
    }

    buscarPosts()
  }, [])

  const marcasUnicas = Array.from(new Set(data.map(item => item.meta?.marca).filter(Boolean)))

  const postsFiltrados = marcaSelecionada
    ? data.filter(post => post.meta?.marca?.toLowerCase().trim() === marcaSelecionada.toLowerCase().trim())
    : data

  return (
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
                onClick={() => setMarcaSelecionada(marca === marcaSelecionada ? null : marca)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  marca === marcaSelecionada ? "bg-black text-white" : "bg-white text-black"
                }`}
              >
                {marca}
              </button>
            ))}
          </div>
        </div>
      </div>

      

      {/* Grid de Cards */}
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-auto">
        {postsFiltrados.map(post => {
          const imagem = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
          return (
            <div key={post.id} className="bg-white rounded-xl shadow p-4 ">
              {imagem && (
                <img 
                  src={imagem}
                  alt={post.title.rendered}
                  className=" w-full h-auto object-cover rounded-lg mb-3"
                />
              )}
              <h3 className="text-lg font-bold ">{post.title.rendered}</h3>
              <div className="text-[#858585] gap-[10px]">
                 <span>{post.meta.ano}  |</span>  
                  <span>{post.meta.combustivel}</span> |
              </div>
                <span className="text-[#858585]"> {post.meta.km}</span>
              
                  
                <div className="pt-[40px] grid">
                <span className="text-[20px]">R${post.meta.preco}</span>
                <button className="bg-[#FE000F] mt-5 font-[500] text-[#fff] p-[8px] rounded-[9px]"> Mais Detalhes</button>
                </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
