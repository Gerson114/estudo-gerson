import { NextSeo } from 'next-seo';
import Slider from '@/components/slider';
import Image from 'next/image';
import img from './img/commander-banner.webp'
import { CARD } from '@/components/api-home';
export default function Home() {
  return (


    <section >
      <div className='flex bg-[#000] justify-center items-center h-[500px] gap-[0px] mx-w-[1200px] w-full' >
        <div className=' max-w-[1200px] '>
          <h1 className='text-[48px] leading-[40px] font-[600] text-[#fff]'>A melhor direção <br />
            para o seu novo carro <br />
            começa aqui</h1>
          <p className='pt-[28px] text-[#fff] text-[18px]'>
            Na Servi Shopping trabalhamos apenas <br />
            com veículos selecionados para você, com <br />
            a máxima confiança e qualidade.</p>
          <div className='flex text-[#fff] pt-[28px] gap-[15px]'>
            <button className='px-8 bg-[#FE000F] rounded-[15px] p-[8px]  '>Comprar um carro</button>
            <button className=' border-[2px] rounded-[15px] px-8 p-[8px] '>vender uma carro</button>
          </div>
        </div>
         
        <Image className=' w-[700px] top-[113px]   relative  ' src={img} alt="Banner do carro" width={1000} height={500} />



      </div>


      <div className='flex justify-center pt-[80px] '>
        <div className='bg-[#FE000F] max-w-[1012px] w-full h-[auto] text-[#fff] flex justify-center  gap-[28px] rounded-[15px] pb-[30px]  pr-[15px]'>
          <div className=' max-w-[600px] w-full p-[15px]  '   >
            <div className='pt-[30px]   text-[#000] '>

              <select className="p-[18px] bg-[#fff] border p-[15px] rounded w-full border-none  text-[#FE000F] ">
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

              <select className="p-[18px] bg-[#fff] border p-[15px] rounded w-full border-none  text-[#FE000F]  mt-[15px] ">
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

              <select className=" p-[18px] bg-[#fff] border p-2 rounded w-full border-none  text-[#FE000F]  mt-[15px]">
                <option className='w-[500px]  ' value="">preço m</option>
                <option value="carro">Carro</option>
                <option value="moto">Moto</option>
                <option value="caminhao">Caminhão</option>
              </select>



            </div>

          </div>

          <div className='text-[38px] leading-[40px] pt-[39px] font-[600] '>
            Encontre o carro <br />
            seminovo que você <br />
            procura aqui! <br />

            <button className='text-[18px] bg-[#000] w-[320px] rounded-[8px] '>buscar</button>

          </div>

        </div>

      </div>


      <CARD />










    </section>


  );
}
