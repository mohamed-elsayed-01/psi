import Image from "next/image"
import { features } from "../../constants"

const Features = () => {


    const RENDER_FEATURES = features.map((f, index) => {
        const isLast = index === features.length - 1
        return (
            <div key={index} className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <Image src={f.img} alt={f.title} width={24} height={24} />
                    <span className="block text-white text-lg font-normal font-dm-serif text-nowrap">
                        {f.title}
                    </span>
                </div>
                <span className={isLast ? "hidden" : "hidden xl:block rounded-full bg-white w-[6px] h-[6px]"}></span>
            </div>
        )
    })

    return (
        <div className="flex flex-col xl:flex-row xl:items-center gap-4 px-6 py-4 xl:py-3 rounded-md xl:rounded-[48px] bg-white/10 backdrop-blur-sm lg:max-w-[639px]">
            {RENDER_FEATURES}
        </div>
    )
}
export default Features