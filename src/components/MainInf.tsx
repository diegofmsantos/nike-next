import { sneakersInfList } from "@/data/sneakersList"
import { Sneaker } from "./Sneaker"

export const MainInf = () => {

    const openPhoto = () => {

    }

    return (
        <main className="max-w-[1000px] flex justify-start flex-wrap gap-20 mx-auto py-4">
            {sneakersInfList.map(item => (
                <div className="mx-auto">
                    <Sneaker key={item.id} photo={item} onClick={openPhoto} />
                </div>
            ))}
        </main>
    )
}