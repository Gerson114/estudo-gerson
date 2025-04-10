type Post = {
    id: number;
    title: { rendered: string };
    featured_media: number;
    _embedded?: {
        'wp:featuredmedia': {
            source_url: string;
        }[];
    };
    meta: {
        nome: string;
        modelo: string;
        ano: number;
        cor: string;
        marca: string;
        km: number;
        motor: number;
        tracao: string;
        transmissao: string;
        combustivel: string;
        preco: number;
    };
};

export async function CARD() {
    const res = await fetch(
        `https://head.agenciaplanner.dev/wp-json/wp/v2/carros?_embed&per_page=3`,
        { cache: 'no-store' }
    );
    const posts: Post[] = await res.json();

    return (

               
        <div className="flex justify-center">
            <div className="max-w-[1200px] w-full mt-[70px]">
                <span className="text-[#FE000F] text-[20px] font-[500]">
                    Temos o carro perfeito para você
                </span>
                <h2 className="font-[600] text-[40px]">Veja nossos modelos disponíveis</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10  h-auto">
                    {/* Destaque do primeiro post */}
                    {posts[0] && (
                        <div className="w-full bg-white rounded shadow overflow-hidden">
                            {posts[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                                <img
                                    src={posts[0]._embedded['wp:featuredmedia'][0].source_url}
                                    alt={posts[0].title.rendered}
                                    className="w-full h-[400px] object-cover"
                                />
                            )}
                            <div className="p-6">
                                <h3 className="text-[25px] font-bold mb-2">{posts[0].title.rendered}</h3>
                                <hr className="pb-[15px] text-[#E4E4E4]" />
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-4 text-[18px] text-gray-600">
                                        <p>{posts[0].meta.ano}</p>
                                        <span>/</span>
                                        <p>{posts[0].meta.combustivel}</p>
                                        <span>/</span>
                                        <p>{posts[0].meta.km} km</p>
                                    </div>
                                    <div className="text-[#FE000F] text-[20px] font-semibold">
                                        R$ {posts[0].meta.preco.toLocaleString('pt-BR')}
                                    </div>
                                </div>
                                <p className="mt-[15px] underline text-sm cursor-pointer text-gray-500">
                                    Mais Detalhes
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Outros cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">
                        {posts.slice(1).map((post) => (
                            <div key={post.id} className=" rounded-[10px]  h-auto  ">
                                <div className="  transition-all duration-300   hover:drop-shadow-[0_3px_5px_rgba(0,0,0,0.2)] bg-[#F9F9F9]  rounded-[8px]   pb-[15px]">
                                    {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                                        <img
                                            src={post._embedded['wp:featuredmedia'][0].source_url}
                                            alt={post.title.rendered}
                                            className="w-full h-[200px] object-cover rounded"
                                        />
                                    )}
                                    <h3 className="text-[18px] font-semibold mt-2 pl-[10px]">{post.title.rendered}</h3>
                                    <div >
                                        <div className="flex text-[13px] gap-[10px] pl-[10px]  text-gray-600">
                                            <p>{post.meta.ano}</p> /
                                            <p>{post.meta.combustivel}</p> /
                                            <p>{post.meta.km}</p>

                                        </div>

                                        <p className="pl-[10px] text-[20px] font-[600] text-[#FE000F]">{post.meta.preco}</p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button className="p-[13px] border-[2px] mt-[25px] mb-[25px] rounded-[9px] font-[600] transition-all hover:bg-[#000] hover:text-[#fff]">
                    Todos os carros
                </button>













            </div>
            

        </div>



    );
}
