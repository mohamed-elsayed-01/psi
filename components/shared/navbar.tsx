"use client"

import { navbarItems } from "@/constants"
import psiLogo from "@/public/images/PSI-Logo.png"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import MobileNav from "./MobileNav"

const Navbar = () => {
    const pathname = usePathname()

    const RENDER_ITEMS = navbarItems.map((n) => {
        const isActive = pathname === n.href
        return (
            <Link
                href={n.href}
                key={n.title}
                className={cn(
                    "font-poppins text-base font-medium leading-[24px] transition-colors",
                    isActive ? "text-white font-bold" : "text-white/70"
                )}
            >
                {n.title}
            </Link>
        )
    })

    return (
        <div className="w-full absolute top-0 left-0 right-0 z-50">
            <div className="py-2 px-[20px] lg:px-[40px] flex justify-between items-center">
                <Image src={psiLogo.src} alt="psi logo" width={50} height={50} />

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-end gap-8">
                    {RENDER_ITEMS}
                    <button className="font-poppins text-base font-medium leading-[24px] text-white px-[28px] py-[10px] rounded-full bg-[#E46027]">
                        Register Now
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </div>
    )
}

export default Navbar