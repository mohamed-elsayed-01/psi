"use client"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { slides } from "@/features/landing/constants"
import clsx from "clsx"
import { ArrowLeft, ArrowRight } from "lucide-react"

const Slider = () => {

    const [activeSlide, setActiveSlide] = useState(slides[1]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const activeElement = containerRef.current.querySelector(`[data-id="${activeSlide.id}"]`);
            if (activeElement) {
                const container = containerRef.current;
                const activeRect = activeElement.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();

                const scrollLeft = container.scrollLeft + (activeRect.left - containerRect.left) - (container.clientWidth / 2) + (activeRect.width / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    }, [activeSlide]);

    const handlePrev = () => {
        const currentIndex = slides.findIndex(s => s.id === activeSlide.id);
        const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setActiveSlide(slides[prevIndex]);
    };

    const handleNext = () => {
        const currentIndex = slides.findIndex(s => s.id === activeSlide.id);
        const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setActiveSlide(slides[nextIndex]);
    };

    return (
        <div className="relative w-full px-[20px] lg:px-[80px]">
            <div ref={containerRef} className="flex items-start justify-start gap-[16px] lg:gap-[32px] overflow-x-auto no-scrollbar h-[350px] lg:h-[480px]">
                {
                    slides.map((s) => {
                        const isActive = s.id === activeSlide.id;
                        return (
                            <div
                                key={s.id}
                                data-id={s.id}
                                onClick={() => setActiveSlide(s)}
                                className={clsx("rounded-[8px] overflow-hidden relative shrink-0 min-w-full md:min-w-[calc((100%-16px)/2)] lg:min-w-[calc((100%-64px)/3)] transition-all duration-300", isActive ? "h-[350px] lg:h-[479px]" : "h-[250px] lg:h-[340px]")}
                            >
                                <Image src={s.image.src} alt={s.alt} fill className="object-cover" />
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-[24px] lg:mt-[40px] flex items-center justify-center gap-[24px] lg:gap-[40px] text-[#272963]">
                <ArrowLeft className="size-6 lg:size-8 cursor-pointer" onClick={handlePrev} />
                <ArrowRight className="size-6 lg:size-8 cursor-pointer" onClick={handleNext} />
            </div>
        </div>
    )
}
export default Slider