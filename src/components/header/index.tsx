import Link from "next/link";
import Image from "next/image";
import img from "./../../../src/app/img/LOGO.webp"


export  function HEADER() {
 return (
   <header>
      <div className=" flex px-3 py-4 bg-[#000] text-white" >
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
            <div>
            <Image src={img} alt="Logo" width={120} height={50} priority />
            </div>

            <nav className="flex items-center text-[18px] justify-center gap-[80px]   ">
                
                    <Link className=" transition-all hover:text-[#FE000F]" href={"/"}>
                    Home
                    </Link>
               
                
                    <Link className=" transition-all hover:text-[#FE000F]" href={"/contato"}>
                     Seminovos
                    </Link>
                
               
                    <Link className=" transition-all hover:text-[#FE000F]" href={"/painel"}>
                    Sobre
                    </Link>

                   

                
               
                
                    <Link className=" transition-all hover:text-[#FE000F]" href={"/produto"}>
                    Contato
                    </Link>
             

                

            </nav>

               

        </div>

      </div>
   </header>
 );
}