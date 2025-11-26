import Image from "next/image"
import island from "@/public/images/island/island.png"
import IslandSlider from "./island-slider"
const IslandView = () => {
    return (
        <div className="pt-[80px] pb-[60px]">
            <div className="px-[20px] lg:px-[80px]">
                <div className="relative w-full h-[400px] lg:h-[900px]">
                    <Image src={island.src} alt="island" fill className="object-cover" />
                </div>
                <h3 className="mt-[84px] text-[#272963] text-[64px] font-normal capitalize tracking-[-2.56px] font-dm-serif">
                    Your Island. Your City. Your Lifestyle.
                </h3>
                <p className="font-poppins text-lg leading-none tracking-[-0.72px] capitalize font-normal text-[#17173B99]">
                    Minutes away from Abu Dhabi’s most iconic destinations.
                </p>

            </div>
            <div className="mt-[40px] ml-[20px] lg:ml-[80px] ">
                <IslandSlider />
            </div>
        </div>
    )
}
export default IslandView