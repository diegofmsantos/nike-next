type Props = {
    image: string
    onClick: () => void
}

export const Modal = ({ image, onClick }: Props) => {

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-[800px] h-[500px] bg-red-300">
            <div className="w-96 h-60">
                <img src={`/images/${image}`} alt="Tênis" />
            </div>
            <div className="text-xl cursor-pointer" onClick={onClick}>
                X
            </div>
        </div>
    )
}