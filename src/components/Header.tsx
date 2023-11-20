import Image from "next/image";
import Link from "next/link";

export const Header = () => {

    return (
        <header className="bg-gray-950 h-20 items-center flex justify-between px-2">
            <div className="flex items-center">
                <Image src="/images/logo-air-jordan.png" alt="Logo Nike" width={80} height={80} />
                <Image src="/images/snkrs.png" alt="Logo Nike" width={80} height={40} className="bg-white h-10" />
            </div>
            <nav className="flex">
                <ul className="flex justify-center items-center gap-10 text-white text-lg">
                    <Link className="cursor-pointer hover:text-slate-300" href="/">Masculino</Link>
                    <Link className="cursor-pointer hover:text-slate-300" href="/feminino">Feminino</Link>
                    <Link className="cursor-pointer hover:text-slate-300" href="/infantil">Infantil</Link>
                    <li className="cursor-pointer hover:text-slate-300">Lançamentos</li>
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