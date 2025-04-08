import { NextSeo } from 'next-seo';
import Slider from '@/components/slider';
import Image from 'next/image';
import img from './img/commander-banner.webp'
import { CARD } from '@/components/api-home';
import { FILTRO } from '@/components/filtrar';
export default function Home() {
  return (


    <section >
      <div className=' grid bg-[#000] justify-center items-center h-auto gap-[0px] mx-w-[1200px] w-full  lg:flex' >
        <div className=' max-w-[1200px] '>
          <h1 className='text-[48px] leading-[40px] font-[600] text-[#fff]  text-center lg:text-start pl-[28px] pt-[80px]' >A melhor direção <br />
            para o seu novo carro <br />
            começa aqui</h1>
          <p className='pt-[28px] text-[#fff] text-[18px]  text-center lg:text-start pl-[28px] '  >
            Na Servi Shopping trabalhamos apenas <br />
            com veículos selecionados para você, com <br />
            a máxima confiança e qualidade.</p>
          <div className='grid text-[#fff] pt-[28px] gap-[15px] lg:flex ml-[28px] '>
            <button className='px-8   mr-[20px] bg-[#FE000F] rounded-[15px] p-[8px]    '>Comprar um carro</button>
            <button className=' border-[2px]  mr-[20px] rounded-[15px] px-8 p-[8px]  '>vender uma carro</button>
          </div>
        </div>

        <Image className=' w-[700px] top-[113px]   relative  ' src={img} alt="Banner do carro" width={1000} height={500} />



      </div>


      <div className='flex justify-center pt-[80px]  '>
        <div className=' lg:flex pt-[25px] grid justify-center text-center bg-[#FE000F] mr-[50px] ml-[50px] max-w-[1100px] w-full h-[auto] text-[#fff] flex justify-center  gap-[28px] rounded-[15px] pb-[30px]  pr-[15px]'>
          <div className='   max-w-[900px] w-[80vw] p-[30px] pt-[36px] m-auto   '   >
           

              <select className="p-[12px] bg-[#fff] border rounded   w-full border-none  text-[#FE000F] ">
                <option className='w-[500px]' value="">Preço minimo</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>

              </select>

              <select className="p-[12px] bg-[#fff] border p-[15px] rounded w-full border-none  text-[#FE000F]  mt-[15px] ">
                <option className='w-[500px]' value="">Preço maximo</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>
                <option value="40.000,00">40.000,00</option>

              </select>

              <select className=" p-[12px] bg-[#fff] border p-2 rounded w-full border-none  text-[#FE000F]  mt-[15px]">
                <option className='w-[500px]  ' value="">preço m</option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="caminhao">Caminhão</option>
              </select>



          

          </div>

          <div className='text-[38px] leading-[40px] pt-[0px] lg:pt-[34px]  font-[600]  grid justify-center'>
            <p className='text-center lg:text-start w-[490px] '> 
              Encontre o carro <span className='text-[#8A0000] '>seminovo</span> que você 
              procura aqui! 
            </p>

            <button className='text-[18px] m-auto bg-[#000] max-w-[500px] w-[60vw] rounded-[8px] lg:m-[10px]  mt-[21px] '>buscar</button>

          </div>

        </div>

      </div>


      <CARD />
      <FILTRO/>
      










    </section>


  );
}
