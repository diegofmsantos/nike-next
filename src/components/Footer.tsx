import { Hepta_Slab } from "next/font/google";
import Image from "next/image"

const heptaSlab = Hepta_Slab({
    weight: '400',
    subsets: ['latin']
})

export const Footer = () => {

    return (
        <footer className={`bg-[#111] ${heptaSlab.className} text-white w-full h-80 px-8`}>
            <div className="w-full flex justify-around p-8 border-b">
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Encontre uma Loja Nike</h3>
                    <div className="text-sm">Cadastre-se para receber novidades</div>
                    <div className="text-sm">Cartão presente</div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Ajuda</h3>
                    <div className="text-sm">Dúvidas Gerais</div>
                    <div className="text-sm">Encontre seu tamanho</div>
                    <div className="text-sm">Entregas</div>
                    <div className="text-sm">Pedidos</div>
                    <div className="text-sm">Trocas e Devoluções</div>
                    <div className="text-sm">Pagamentos</div>
                    <div className="text-sm">Produtos</div>
                    <div className="text-sm">Corporativos</div>
                    <div className="text-sm">Fale conosco</div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Sobre a Nike</h3>
                    <div className="text-sm">Feito para jogar</div>
                    <div className="text-sm">Sustentabilidade</div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-2">Redes Sociais</h3>
                    <div className="flex gap-2">
                        <Image src="/images/instagram.png" alt="" width={25} height={25} />
                        <Image src="/images/facebook.png" alt="" width={25} height={25} />
                        <Image src="/images/youtube.png" alt="" width={25} height={25} />
                    </div>
                </div>
            </div>
            <div className="text-center py-2">Desenvolvido como método de estudo</div>
        </footer>
    )
}