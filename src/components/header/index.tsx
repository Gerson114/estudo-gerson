import Link from "next/link";

export  function HEADER() {
 return (
   <header>
      <div className=" flex px-3 py-4 bg-zinc-900 text-white" >
        <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
            <div>
                Nextjs
            </div>

            <nav className="flex items-center justify-center gap-2">
                <li>
                    <Link href={"/"}>
                    home
                    </Link>
                </li>
                <li>
                    <Link href={"/contato"}>
                    contato
                    </Link>
                </li>
                <li>
                    <Link href={"/painel"}>
                    painel
                    </Link>

                   

                </li>
                <li>
                    <Link href={"/ detalhes"}>
                    detalhes
                    </Link>
                </li>

                

            </nav>

        </div>

      </div>
   </header>
 );
}