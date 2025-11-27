import heroImg from "@/public/images/hero-img.png"
import LeftSide from "@/features/landing/components/hero/left-side"
import RightSide from "@/features/landing/components/hero/right-side"
import disscountBadge from "@/public/images/disscount-badge.png"
import Image from "next/image"

const hero = () => {
    return (
        <div style={{
            backgroundImage: `url(${heroImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className="w-full relative">
            <div className="absolute inset-0 bg-black/25" />
            <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 relative z-2">
                <div className="h-full col-span-1 bg-transparent lg:bg-[#0B3F63]/60 flex flex-col  justify-center pt-[80px] lg:pt-0">
                    <LeftSide />
                </div>
                <div className="h-full col-span-1 flex items-center justify-center py-10 lg:py-0">
                    <RightSide />
                </div>
            </div>
            <Image src={disscountBadge.src} alt="disscount badge" width={451} height={104} className="hidden lg:block absolute bottom-[64px] left-1/2 -translate-x-1/2 z-4" />
        </div>
    )
}

export default hero