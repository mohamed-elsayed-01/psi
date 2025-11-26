import sectionimg from "@/public/images/investment/investment.png"
import { investment } from "../../constants"

const Investment = () => {


    const render_investments = investment.map((i) => (
        <div key={i} className="flex items-center gap-2">
            <span className="block size-5 bg-[#FFFFFFCC] rounded-full"></span>
            <span className="block font-poppins text-base lg:text-xl text-[#FFFFFFCC] tracking-[-0.8px] capitalize leading-[30px] lg:leading-[40px]">
                {i}
            </span>
        </div>
    ))

    return (
        <div style={{
            backgroundImage: `url(${sectionimg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className=" w-full">
            <div className="py-[40px] lg:py-[80px] px-[20px] lg:px-[80px]">
                <div className="h-full max-w-[640px] w-full p-[20px] lg:p-[32px] flex flex-col gap-6 bg-[#27296399] rounded-[8px] backdrop-blur-sm">
                    <h3 className="text-white text-[32px] md:text-[48px] lg:text-[64px] font-normal tracking-[-1.28px] lg:tracking-[-2.56px] font-dm-serif capitalize">
                        A Smart Investment for End-Users & Investors
                    </h3>
                    <div className="flex flex-col gap-4">
                        {render_investments}
                    </div>
                    <button className="rounded-full text-[#272963] text-sm lg:text-base leading-6 font-semibold w-fit px-[20px] py-[12px] lg:px-[28px] lg:py-[16px] bg-white">
                        Register Now
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Investment