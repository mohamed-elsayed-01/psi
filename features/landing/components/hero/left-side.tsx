import Image from "next/image"
import logo2 from "@/public/images/logo-2.png"
import Features from "@/features/landing/components/hero/features"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"


const LeftSide = () => {
    return (
        <div className="px-[20px] lg:px-[80px] space-y-5 w-fit text-white">
            <div className="">
                <Image src={logo2} alt="logo2" width={120} height={63} />
            </div>
            <h1 className="text-7xl font-normal tracking-[-2.88px] font-dm-serif">Hudayriyat Island</h1>
            <p className="max-w-[640px] text-2xl font-normal tracking-[-0.96px] capitalize font-poppins">
                Waterfront Apartments on Hudayriyat Island 1–4 Bedroom Residences From AED 2.35M
            </p>
            <Features />
            <Button className="rounded-full text-base font-semibold leading-6 px-7 py-6 mt-7 w-auto">
                <div className="flex items-center gap-2 text-[#272963]">
                    Register for Priority Access <ArrowRight />
                </div>
            </Button>
        </div>
    )
}
export default LeftSide
