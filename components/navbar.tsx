import Image from "next/image";
import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 w-full flex flex-col pt-6 md:pt-8 pb-4 text-white bg-gradient-to-b from-black/60 to-transparent">

            {/* TIER 1: Main Navigation (Menu, Logo, Search) */}
            {/* Pake grid grid-cols-3 biar otomatis kebagi 3 bagian yg sama rata */}
            <div className="grid grid-cols-3 items-center px-6 md:px-12 w-full">

                {/* Left: Menu */}
                <div className="flex items-center gap-3 cursor-pointer group justify-self-start">
                    <Menu size={20} className="stroke-1" />
                    <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">
                        Menu
                    </span>
                </div>

                {/* Center: FR Logo */}
                {/* Nggak pake absolute lagi, jadi otomatis dorong tier 2 ke bawah */}
                <div className="flex justify-center justify-self-center">
                    <Image
                        src="/signature-FR.png"
                        alt="FR Logo"
                        width={60}
                        height={30}
                        // Kita kunci height-nya biar nggak meledak ukurannya
                        className="object-contain brightness-0 invert opacity-90 h-[25px] md:h-[35px] w-auto"
                        priority
                    />
                </div>

                {/* Right: Search */}
                <div className="flex items-center gap-3 cursor-pointer group justify-self-end">
                    <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">
                        Search
                    </span>
                    <Search size={20} className="stroke-1" />
                </div>
            </div>

            {/* TIER 2: Sub-Navigation Links */}
            {/* mt-6 ngasih jarak natural dari logo FR di atasnya */}
            <div className="hidden md:flex justify-center items-center gap-x-6 mt-6 text-[10px] tracking-[0.2em] font-medium text-white/70 uppercase">
                <Link href="/about" className="hover:text-white transition-colors duration-300">About</Link>
                <span className="text-white/30 font-light">|</span>
                <Link href="#" className="hover:text-white transition-colors duration-300">Corporation</Link>
                <span className="text-white/30 font-light">|</span>
                <Link href="#" className="hover:text-white transition-colors duration-300">Initiative</Link>
                <span className="text-white/30 font-light">|</span>
                <Link href="#" className="hover:text-white transition-colors duration-300">Philanthropy</Link>
                <span className="text-white/30 font-light">|</span>
                <Link href="#" className="hover:text-white transition-colors duration-300">Media</Link>
                <span className="text-white/30 font-light">|</span>
                <Link href="#" className="hover:text-white transition-colors duration-300">Rewards & Recognitions</Link>
            </div>

        </nav>
    );
}