"use client";
import idealHome from "@/public/images/ideal-home/ideal-home.jpg"
import { residences } from "@/features/landing/constants"
import { Heart } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import Image from "next/image";

const HomeOptions = () => {

    const [activeOption, setActiveOption] = useState(residences[0]);

    const RENDER_OPTIONS = residences.map((r, idx) => {

        const isActive = r.title === activeOption.title;

        return (
            <div onClick={() => setActiveOption(r)} key={idx} className={clsx("w-full cursor-pointer px-6 py-5 rounded-[8px]  border border-[#ffffff]/10 space-y-[16px]", isActive ? "bg-[#E46027]" : "bg-[#ffffff]/10 backdrop-blur-[20px]")}>
                <span className="block text-white text-[32px] font-dm-serif leading-[40px] ">
                    {r.title}
                </span>
                <div className="space-y-2">
                    {r.features.map((f, idx) => {
                        const isFirst = idx === 0;

                        return (
                            <span key={idx} className="text-[#FFFFFF] text-base font-normal font-poppins leading-[20px] flex items-center gap-1">
                                {isFirst && <Heart className={clsx("size-6", isActive ? "fill-[#FFFFFF]" : "")} />}{f}
                            </span>
                        )
                    })}
                </div>
            </div>
        )
    })
    return (
        <div style={{
            backgroundImage: `url(${idealHome.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }} className=" w-full px-[20px] lg:px-[80px] py-[64px] relative">
            <div className="absolute inset-0 bg-black opacity-40" />
            <div className="relative z-2 space-y-[30px] lg:space-y-[50px] ">
                <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6 xl:gap-0">
                    <h3 className="text-[32px] xl:text-[64px] font-normal tracking-[-1.28px] xl:tracking-[-2.56px] capitalize font-dm-serif text-white leading-[1.1]">
                        Choose Your Ideal Home
                    </h3>
                    <button className="w-full xl:w-auto py-4 px-7 rounded-full bg-[#E0592A] text-base font-semibold leading-6 text-white">
                        Request Floor Plans
                    </button>
                </div>
                <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_709px] gap-[40px]">
                    <div className="col-span-1 space-y-6 w-full">
                        {RENDER_OPTIONS}
                    </div>
                    <div className="col-span-1 h-full ml-auto w-full">
                        <Image className="rounded-[8px] w-full h-auto object-cover" src={activeOption.img.src} alt={activeOption.title} width={631} height={709} />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default HomeOptions