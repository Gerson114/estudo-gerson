

export default function Home() {
  return (
    <section >
      <div className=" flex justify-center max-w-5x1  w-full   mt-[50px] " >
        <div className=" flex bg-[#F1EBEB]  max-w-[1200px] w-full h-[588px]   text-[#000] rounded-[15px]   bg-[url(/Rectangle.png)]  bg-right-bottom bg-no-repeat" >
          <div className=" w-[600px]" >
            <h1 className="text-[50px]  mt-[126px] ml-[77px]">
              Ouça o que importa, <br /> viva o que ama.
            </h1>
            <p className="text-[21px] ml-[77px] pt-[18px]">
              Na Audim ajudamos você a se reconectar com o mundo através de soluções auditivas personalizadas.
            </p>
            <button className=" mt-[20px] ml-[77px] cl-[#E5105F] w-[228px] p-[20px] rounded-[15px] bg-[#E5105F] cursor-pointer text-[#fff] text-[18px] ">
              Saiba mais
            </button>
          </div>
        </div>

      </div>
   
      <div className=" flex justify-center pt-[11px] pb-[11px]">
        <div className="max-w-[1200px] pt-[29px] pb-[29px] w-full text-[30px]">
          <h2>Nossos Produtos</h2>
          <hr className=" w-[300px] text-[#e11d48]  " />

        </div>
      </div>


      <div className="">

      </div>



      <div className=" flex justify-center pt-[11px] pb-[11px]">
        <div className="max-w-[1200px] pt-[29px] pb-[29px] w-full text-[30px]">
          <h2>Nossos Serviços</h2>
          <hr className=" w-[300px] text-[#e11d48]  " />

        </div>
      </div>

    </section>
  );
}
