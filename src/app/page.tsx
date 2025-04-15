
import Image from 'next/image';
import img from './img/commander-banner.webp'
import { CARD } from '@/components/api-home';
import { FILTRO } from '@/components/filtrar';
import eq from './img/35946-FOTOS-EQUIPE-2-1024x628.jpg.webp'
export default function Home() {
  return (


    <section >
      <div className=' grid bg-[#000] justify-center items-center h-auto gap-[0px] mx-w-[1140px] w-full  lg:flex' >
        <div className=' max-w-[1140px] '>
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




      <div className="mt-[100px] w-[60%] lg:max-w-[1000px] lg:w-[100vw] m-auto">
  <div className="grid lg:flex bg-[#FE000F] rounded-[15px]  ">

    {/* Filtros */}
    <div className="grid justify-center items-center gap-[20px] max-w-[600px] lg:p-[28px]     ">
      <select className=" w-[40vw] max-w-[600px] lg:max-w-[500px] lg:w-[50vw] p-4 bg-white text-[#FE000F] rounded-[9px]">
        <option value="">Preço mínimo</option>
        <option value="40000">40.000,00</option>
        <option value="50000">50.000,00</option>
        <option value="60000">60.000,00</option>
      </select>
      <select className="w-full p-4 bg-white text-[#FE000F] rounded-[9px]">
        <option value="">Preço máximo</option>
        <option value="70000">70.000,00</option>
        <option value="80000">80.000,00</option>
        <option value="90000">90.000,00</option>
      </select>
      <select className="w-full p-4 bg-white text-[#FE000F] rounded-[9px]">
        <option value="">Tipo</option>
        <option value="carro">Carro</option>
        <option value="moto">Moto</option>
        <option value="caminhao">Caminhão</option>
      </select>
    </div>

    {/* Texto + botão */}
    <div className="text-center lg:text-left p-0 lg:p-5 rounded-[9px] flex flex-col items-center lg:items-start lg:w-[
    400px] m-auto">
  <p className="text-[#fff] font-[600] text-[28px] sm:text-[30px] lg:text-[32px] leading-tight mb-4">
    Encontre o carro<br />
    <span className="text-[#8A0000]">seminovo</span> que você<br />
    procura aqui!
  </p>
  <button className="w-full sm:w-full max-w-full bg-[#000] text-white rounded-[7px] px-6 py-3 hover:bg-[#111] transition">
    Enviar
  </button>
</div>

  </div>
</div>






      <CARD />
      <FILTRO />


      <div className='grid justify-center max-w-[1200px] m-auto'  >
        <div className='mt-[100px] text-center'>
          <p className='text-[#FE000F] text-[18px] '>O melhor lugar para escolher o seu carro</p>
          <h2 className='font-[600] text-[40px] '>Por que nos escolher?</h2>
        </div>

        <div className='flex justify-between mt-[68px] gap-[25px]' >
          <div className=' text-center  max-w-[370px] '>
            <h3 className='text-[22px] font-[600]'>Atendimento Premium</h3>
            <p className='text-[#806D6D]  mt-[15px]'>Nosso atendimento conta com 100% dos processos digitalizados, incluindo assinatura de contrato, face ID para identificação do financiamento, tudo isso pra trazer agilidade e o conforto que você merece, com total segurança de seus dados nos padrões da LGPD.</p>

          </div>

          <hr className='w-[1px] h-[240px] bg-gray-300 ' />

          <div className=' text-center max-w-[370px]'>
            <h3 className='text-[22px] font-[600]'>Veículos de Procedência</h3>
            <p className='text-[#806D6D]  mt-[15px]'>Dispomos de ampla variedade de veículos selecionados, novos e seminovos e ampla gama de modelos, cores, ano de fabricação e faixa de preço. Garantia de procedência e vistoria cautelar 100% aprovada em todo o estoque.</p>

          </div>

          <hr className='w-[1px] h-[240px] bg-gray-300 ' />

          <div className=' text-center max-w-[370px]'>
            <h3 className='text-[22px] font-[600]'>Atendimento Premium</h3>
            <p className='text-[#806D6D] mt-[15px]'>Temos mais que colaboradores, temos parceiros. Nossa equipe está em constante evolução através de treinamentos pra sempre entregar o melhor atendimento, porque aqui a sua satisfação é a nossa principal meta.</p>
          </div>



        </div>

      </div>


      <div className='mt-[200px]'>
        <div className="bg-[#F1F1F1] h-[300px] relative">
          {/* Card preto "encaixado" */}
          <div className="bg-[#000] max-w-[1200px] m-auto h-auto rounded-[10px] text-white p-6 -translate-y-[180px] shadow-lg  p-[45px]">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex-1">
                <h3 className="text-[30px] font-bold mb-2">Equipe Servi Shopping</h3>
                <p className="mb-4">
                  Nossa equipe é o coração da concessionária, composta por profissionais experientes e comprometidos em proporcionar um atendimento de alto nível. Cada consultor de vendas e técnico é treinado para entender suas necessidades e oferecer soluções que vão além do esperado. Com um foco em qualidade e atenção aos detalhes, garantimos que sua experiência conosco seja sempre positiva.
                </p>
                <button className=" border-[2px] text-[#fff] px-4 py-2 rounded-[8px] ">
                  Falar com consultor
                </button>
              </div>
              <div className="flex-1 text-center">
                <Image className='rounded-[10px]'
                  src={eq}
                  alt='baner eq'
                />
              </div>
            </div>
          </div>
        </div>
      </div>










    </section>


  );
}
