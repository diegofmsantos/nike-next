import Image from "next/image";
import Link from "next/link";
import { Hepta_Slab } from "next/font/google";

const heptaSlab = Hepta_Slab({
    weight: '500',
    subsets: ['latin']
})


export const Header = () => {

    return (
        <header className={`bg-[#111] h-20 items-center flex justify-around px-2 ${heptaSlab.className}  fixed w-full`}>
            <div className="flex items-center">
                <Image src="/images/logo-air-jordan.png" alt="Logo Nike" width={80} height={80} />
                
            </div>
            <nav className="flex">
                <ul className="flex justify-center items-center gap-10 text-white text-lg">
                    <Link className="cursor-pointer hover:text-slate-300" href="/">Masculino</Link>
                    <Link className="cursor-pointer hover:text-slate-300" href="/feminino">Feminino</Link>
                    <Link className="cursor-pointer hover:text-slate-300" href="/infantil">Infantil</Link>
                </ul>
            </nav>
            <div>
                <Image src="/images/logo-nike.png" alt="Logo Jordan" width={80} height={80} />
            </div>
            <div className="hidden">
                <Image src="/images/menu.png" alt="Logo Nike" width={40} height={40} />
            </div>
        </header>
    )
}