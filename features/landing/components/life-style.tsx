import img1 from "@/public/images/life-style/1.webp"
import img2 from "@/public/images/life-style/2.webp"
import img3 from "@/public/images/life-style/3.webp"
import img4 from "@/public/images/life-style/4.webp"
import img5 from "@/public/images/life-style/5.webp"
import img6 from "@/public/images/life-style/6.webp"
import Image from "next/image"

const LifeStyle = () => {
    return (
        <div className="min-h-[1000px] w-full px-[20px] lg:px-[40px] relative flex justify-center items-center bg-[#FFFFFF]">
            <div className="relative z-5">
                <div className="max-w-[640px] space-y-[48px] flex flex-col items-center">
                    <h3 className="text-[#272963] text-[40px] lg:text-[72px] font-normal tracking-[-2.88px] capitalize font-dm-serif text-center">
                        Introducing Bashayer Residences
                    </h3>
                    <p className="text-[#17173B]/60 text-lg  font-normal tracking-[-0.72px] font-dm-sans text-center">
                        A premium collection of waterfront apartments with elegant design, expansive layouts and a lifestyle built around wellness, recreation and community. Located on the iconic Hudayriyat Island, Bashayer offers a rare opportunity to own a home in one of Abu Dhabi’s fastest-growing destinations.
                    </p>
                    <button className="text-base leading-6 text-white font-semibold bg-[#E46027] px-[28px] py-[10px] rounded-full">
                        Register Now
                    </button>
                </div>
            </div>
            <div className="hidden xl:block absolute top-[65px] left-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                    <Image src={img1.src} alt="img1" fill className="object-cover" />
                </div>
            </div>
            <div className="hidden xl:block absolute top-[65px] right-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                    <Image src={img2.src} alt="img2" fill className="object-cover" />
                </div>
            </div>
            <div className="hidden xl:block absolute top-[332.84px] left-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                    <Image src={img3.src} alt="img3" fill className="object-cover" />
                </div>
            </div>
            <div className="hidden xl:block absolute top-[332.84px] right-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                    <Image src={img4.src} alt="img4" fill className="object-cover" />
                </div>
            </div>
            <div className="hidden xl:block absolute top-[566.21px] left-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                    <Image src={img5.src} alt="img5" fill className="object-cover" />
                </div>
            </div>
            <div className="hidden xl:block absolute top-[566.21px] right-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
                <div className="w-full h-full relative rounded-[4px] overflow-hidden">
                    <Image src={img6.src} alt="img6" fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}
export default LifeStyle