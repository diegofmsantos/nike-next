import { Sneakers } from "@/types/Sneakers"
import { Hepta_Slab } from 'next/font/google'

const heptaSlab = Hepta_Slab({
    weight: '500',
    subsets: ['latin']
})

type Props = {
    photo: Sneakers
    onClick: () => void
}

export const Sneaker = ({ photo, onClick }: Props) => {

    return (
        <div onClick={onClick} className={`cursor-pointer ${heptaSlab.className}`}>
            <img 
            src={`/images/${photo.url}`} 
            alt="Tênis Nike" 
            className="w-[210px] h-36"
            />
            <div className="text-sm text-center">
                <div>{photo.label}</div>
                <div>{photo.price}</div>
            </div>
        </div>
    )
}