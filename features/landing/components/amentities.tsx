import { amenities } from "../constants"
import Slider from "./slider"

const Amentities = () => {

    const RENDER_AMENITIES = amenities.map((a, idx) => {
        return (
            <div key={idx} className="flex items-center gap-2 bg-[#E0592A1A] rounded-full py-2 px-4 lg:py-3 lg:px-6 text-[#E0592A] text-nowrap">
                <a.icon className="size-5 lg:size-6" />
                <span className="text-base lg:text-xl font-normal font-dm-serif">{a.title}</span>
            </div>
        )
    })

    return (
        <div className="py-[40px] lg:py-[80px]">
            <div className="space-y-4 lg:space-y-6 text-center px-4">
                <h3 className="text-[#272963] text-[32px] lg:text-[64px] font-normal tracking-[-1.28px] lg:tracking-[-2.56px] capitalize font-dm-serif ">
                    A Resort Lifestyle Every Day
                </h3>
                <p className="text-[#17173B99] font-poppins capitalize font-normal text-base lg:text-lg tracking-[-0.72px]">
                    Designed to elevate everyday living, Bashayer brings together wellness, recreation, and leisure in one premium community .
                </p>
            </div>
            <div className="mt-[24px] lg:mt-[40px]">
                <Slider />
            </div>
            <div className="mt-[24px] lg:mt-[40px] flex flex-wrap items-center justify-center gap-[10px] lg:gap-[20px] max-w-[1126px] mx-auto px-4">
                {RENDER_AMENITIES}
            </div>

        </div>
    )
}
export default Amentities