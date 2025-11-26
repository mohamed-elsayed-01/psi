import Image from "next/image"
import { islandSlides } from "../../constants"

const IslandSlider = () => {


    const RENDER_ITEMS = islandSlides.map((i, key) => {
        return (
            <div key={key} className="bg-white p-3 rounded-[4px] shadow-[0_24px_48px_-12px_rgba(16,24,40,0.18)]">
                <div className="relative w-[316px] h-[316px]">
                    <Image src={i.img} alt={i.duration} fill className="object-cover" />
                </div>
            </div>
        )
    })

    return (
        <div className="flex items-center gap-[32px] overflow-auto no-scrollbar pb-20">
            {RENDER_ITEMS}
        </div>
    )
}
export default IslandSlider