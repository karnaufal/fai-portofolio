"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isTier1Hovered, setIsTier1Hovered] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isAtTop, setIsAtTop] = useState(true);
    const lastScrollY = useRef(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsAtTop(currentScrollY < 10);

            if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
                setIsVisible(false);
                setIsTier1Hovered(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isWholeNavWhite = !isAtTop;
    const isTier1White = isAtTop && isTier1Hovered;
    const showWhiteBg = isWholeNavWhite || isTier1White;

    return (
        <nav className={`
            fixed top-0 inset-x-0 z-50 w-full flex flex-col
            transition-all duration-300 ease-in-out
            ${isVisible ? "translate-y-0" : "-translate-y-full"}
            ${isWholeNavWhite
                ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]"
                : "bg-gradient-to-b from-black/60 to-transparent"
            }
        `}>

            <div
                onMouseEnter={() => setIsTier1Hovered(true)}
                onMouseLeave={() => setIsTier1Hovered(false)}
                className={`
                    grid grid-cols-3 items-center px-6 md:px-12 w-full pt-6 md:pt-8 pb-4
                    transition-all duration-300
                    ${isTier1White ? "bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.08)]" : "bg-transparent"}
                `}
            >
                {/* Left: Menu */}
                <div className={`flex items-center gap-3 cursor-pointer group justify-self-start transition-colors duration-300 ${showWhiteBg ? "text-black" : "text-white"}`}>
                    <Menu size={20} className="stroke-1" />
                    <span className="hidden md:inline text-[11px] capitalize tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">
                        Menu
                    </span>
                </div>

                {/* Center: FR Logo */}
                <div className="flex justify-center justify-self-center">
                    <Image
                        src="/signature-FR.png"
                        alt="FR Logo"
                        width={60}
                        height={30}
                        className={`
                            object-contain opacity-90 h-[25px] md:h-[35px] w-auto
                            transition-all duration-300
                            ${showWhiteBg ? "brightness-0" : "brightness-0 invert"}
                        `}
                        priority
                    />
                </div>

                {/* Right: Search */}
                <div className={`flex items-center gap-3 cursor-pointer group justify-self-end transition-colors duration-300 ${showWhiteBg ? "text-black" : "text-white"}`}>
                    <span className="hidden md:inline text-[11px] capitalize tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">
                        Search
                    </span>
                    <Search size={20} className="stroke-1" />
                </div>
            </div>

            <div className={`hidden md:flex justify-center items-center gap-x-6 pb-4 text-[12.5px] tracking-[0.2em] font-extralight uppercase transition-colors duration-300
    ${isWholeNavWhite ? "text-zinc-500" : "text-white/70"}
`}>
                {[
                    { name: "About", href: "/about" },
                    { name: "Corporation", href: "/corporation" },
                    { name: "Initiative", href: "/initiative" },
                    { name: "Philanthropy", href: "/philanthropy" },
                    { name: "Media", href: "/media" },
                    { name: "Rewards & Recognitions", href: "/rewards" },
                ].map((link, index, array) => (
                    <div key={link.href} className="flex items-center gap-x-6">
                        <Link
                            href={link.href}
                            className={`transition-all duration-300 
                    ${pathname === link.href
                                    ? `font-bold ${isWholeNavWhite ? "text-[#006039]" : "text-white"}`
                                    : `${isWholeNavWhite ? "hover:text-[#006039]" : "hover:text-white"}`
                                }`}
                        >
                            {link.name}
                        </Link>
                        {index < array.length - 1 && (
                            <span className={`font-light ${isWholeNavWhite ? "text-zinc-300" : "text-white/30"}`}>|</span>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}
