import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

export default function InitiativePage() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white font-sans text-black antialiased">

            {/* HEADER NAVIGATION (image_42e500.jpg) */}
            <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
                {/* Top Row: Menu & Logo */}
                <div className="flex items-center justify-between px-10 py-6 border-b border-zinc-100">
                    <span className="text-xs tracking-[0.3em] uppercase font-medium">Menu</span>
                    <Image
                        src="/signature-fr-white.png"
                        alt="FR Logo"
                        width={60}
                        height={30}
                        className="object-contain opacity-90 h-[22px] w-auto brightness-0"
                        priority
                    />
                    <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-medium cursor-pointer group">
                        <span className="group-hover:opacity-70 transition-opacity">Search</span>
                        <Search size={16} className="stroke-1" />
                    </div>
                </div>

                {/* Sub-Nav Row: Categories */}
                <nav className="flex items-center justify-between px-10 py-4 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                    <span className="text-black font-semibold italic">Initiative</span>
                    <div className="flex gap-10">
                        <button className="hover:text-black transition-colors">About</button>
                        <Link href="/initiative/book" className="hover:text-black transition-colors">Book</Link>
                        <Link href="/initiative/music" className="hover:text-black transition-colors">Music</Link>
                        <Link href="/initiative/architecture-concept" className="hover:text-black transition-colors">Architecture Concept</Link>
                        <Link href="/initiative/science-and-health" className="hover:text-black transition-colors">Science and Health</Link>
                        <Link href="/initiative/community" className="hover:text-black transition-colors">Community</Link>
                        <button className="hover:text-black transition-colors">Contemporary Dance Art</button>
                        <button className="hover:text-black transition-colors">Videos</button>
                    </div>
                </nav>
            </header>

            {/* SECTION 1: Hero Initiative (image_42e500.jpg) */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center pt-24">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-horse.png"
                        alt="Initiative Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>

                {/* Garis Vertikal Indikator Scroll */}
                <div className="absolute left-1/2 bottom-10 h-24 w-[1px] bg-white/50 -translate-x-1/2"></div>
            </section>

            {/* SECTION 2: Next Content (Coming Soon) */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center bg-zinc-50">
                <p className="text-zinc-400 tracking-widest uppercase italic">Project Details Coming Soon</p>
            </section>

        </main>
    );
}