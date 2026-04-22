import Image from "next/image";
import Link from "next/link";
import { Search, Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 w-full flex flex-col pt-6 md:pt-8 text-white bg-gradient-to-b from-black/50 to-transparent">

            <div className="flex justify-between items-center px-6 md:px-12 relative w-full">

                <div className="flex items-center gap-3 cursor-pointer group">
                    <Menu size={20} className="stroke-1" />
                    <span className="hidden md:inline text-xs uppercase tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">
                        Menu
                    </span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 top-0 md:-top-2">
                    <Image
                        src="/signature-frz-1.png" 
                        alt="FR Logo"
                        width={110}
                        height={40}
                        className="object-contain brightness-0 invert opacity-90 w-[80px] md:w-[110px] h-auto"
                        priority
                    />
                </div>

                {/* Right: Search */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <span className="hidden md:inline text-xs uppercase tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">
                        Search
                    </span>
                    <Search size={20} className="stroke-1" />
                </div>
            </div>

            {/* TIER 2: Sub-Navigation Links */}
            <div className="hidden md:flex justify-center items-center gap-x-6 mt-8 pb-4 text-[10px] tracking-[0.2em] font-medium text-white/70 uppercase">
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