"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { navbarItems } from "@/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const MobileNav = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const MOBILE_ITEMS = navbarItems.map((n) => {
        const isActive = pathname === n.href
        return (
            <Link
                href={n.href}
                key={n.title}
                onClick={() => setIsOpen(false)}
                className={cn(
                    "font-poppins text-base font-medium leading-[24px] transition-colors",
                    isActive ? "text-[#272963] font-bold" : "text-[#272963]/70"
                )}
            >
                {n.title}
            </Link>
        )
    })

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Menu className="text-white cursor-pointer w-8 h-8" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-full bg-white border-none [&>button]:text-[#272963]">
                <div className="flex flex-col gap-8 mt-10 items-start px-6">
                    {MOBILE_ITEMS}
                    <button className="font-poppins text-base font-medium leading-[24px] text-white px-[28px] py-[10px] rounded-full bg-[#E46027]">
                        Register Now
                    </button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
