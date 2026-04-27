"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Navbar from "@/components/navbar";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
    const container = useRef(null);
    const scrollIndicatorRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".parallax-card");

        gsap.to(cards[0] as HTMLElement, {
            y: -80,
            ease: "none",
            scrollTrigger: {
                trigger: cards[0] as HTMLElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 2,
            }
        });

        gsap.to(cards[1] as HTMLElement, {
            y: -160,
            ease: "none",
            scrollTrigger: {
                trigger: cards[1] as HTMLElement,
                start: "top 85%",
                end: "bottom top",
                scrub: 1.8,
            }
        });

        gsap.to(cards[2] as HTMLElement, {
            y: -40,
            ease: "none",
            scrollTrigger: {
                trigger: cards[2] as HTMLElement,
                start: "top 90%",
                end: "bottom top",
                scrub: 2.5,
            }
        });

        if (scrollIndicatorRef.current) {
            gsap.set(scrollIndicatorRef.current, { y: 0, opacity: 1 });
            gsap.to(scrollIndicatorRef.current, {
                y: 12,
                opacity: 0,
                duration: 1.8,
                ease: "power1.in",
                repeat: -1,
                repeatDelay: 1,
                yoyo: false,
                onRepeat: () => { gsap.set(scrollIndicatorRef.current!, { y: 0, opacity: 1 }); },
            });
        }

    }, { scope: container });
    ``
    return (

        <main ref={container} className="relative w-full bg-[#F5F5F5] font-sans text-black antialiased">

            <Navbar />

            {/* SECTION 1: Cinematic Hero */}
            <section className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center bg-black">

                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-art-detail.png"
                        alt="Art of Detail Background"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20"></div>
                </div>

                {/* CENTER CONTENT: ART OF DETAIL - Full PNG Version */}
                <div className="relative z-10 select-none w-full px-4 flex flex-col items-center justify-center">

                    <div className="flex-shrink-0 w-full max-w-[75vw] md:max-w-lg lg:max-w-xl">
                        <Image
                            src="/artofdetail.png"
                            alt="Art of Detail"
                            width={500}
                            height={200}
                            priority
                            sizes="(max-width: 768px) 75vw, 500px"
                            className="w-full h-auto object-contain brightness-0 invert opacity-95"
                        />
                    </div>

                    {/* Button Discover Now (Adjusted for Elegance) */}
                    <button className="mt-12 md:mt-16 px-10 md:px-14 py-3 md:py-3.5 bg-white text-black rounded-full text-[10px] md:text-xs font-semibold uppercase tracking-wider hover:bg-gray-200 hover:scale-105 transition-all duration-300 shadow-lg">
                        Discover Now
                    </button>

                </div>

                <div ref={scrollIndicatorRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </div>
            </section>

            {/* SECTION 2: Editorial Portrait Intro - Updated with Full Quote */}
            <section className="relative flex h-screen w-full items-center justify-center bg-[#F5F5F5] p-10 md:p-24 overflow-hidden border-b border-zinc-200/50">
                <div className="flex flex-col items-center justify-center max-w-5xl text-center space-y-16">
                    <h2 className="text-xl md:text-5xl font-normal italic tracking-tight leading-[1.2] text-zinc-900">
                        Seorang anak yang ingin menciptakan <br className="hidden md:block" /> landscape terindah di dunia.
                    </h2>
                    <div className="space-y-10">
                        <p className="text-zinc-500 font-semi-bold leading-relaxed text-sm md:text-xl max-w-4xl mx-auto italic px-4">
                            &quot;Saya meyakini bahwa saat saya membidikkan busur visioner ke arah bintang dan membiarkan diri melayang di atas sayap mimpi menuju tujuan yang tak biasa—di situlah, dalam dahaga akan kesempurnaan dan pemberontakan terhadap banalitas, saya sedang mengalirkan sebuah mata air idealisme yang misterius.&quot;
                        </p>

                        {/* Author Attribution */}
                        <p className="text-[12px] md:text-sm capitalized font-semibold text-zinc-800">
                            — F. R. Zulfikar, Principal Indonesia.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 3: The Spectre Editorial Flow — Pixel-matched to Figma */}

            <section className="relative h-[140vh] md:h-[200vh] w-full bg-[#F5F5F5] overflow-hidden">
                <div className="relative w-full h-full">

                    {/* 1. Gambar Bentley (person-1.png) — Kanan Atas */}
                    <div className="parallax-card absolute right-0 top-0 z-10 w-[75%] md:w-[46%] aspect-[796/650] overflow-hidden shadow-2xl">
                        <Image
                            src="/person-1.png"
                            alt="Bentley"
                            fill
                            sizes="(max-width: 768px) 75vw, 46vw"
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            priority
                        />
                    </div>

                    {/* 2. Gambar Bapak Kacamata (person-2.png) — Kiri, THE OVERLAPPER */}
                    <div className="parallax-card absolute left-0 z-30 top-[28%] md:top-[22%] w-[75%] md:w-[46%] aspect-[789/650] overflow-hidden shadow-sm">
                        <Image
                            src="/person-2.png"
                            alt="Visionary"
                            fill
                            sizes="(max-width: 768px) 75vw, 46vw"
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* 3. Gambar B&W Suit (person-3.png) — Center Bawah (Wider Landscape) */}
                    <div className="parallax-card absolute left-1/2 -translate-x-1/2 z-20 top-[52%] md:top-[43%] w-[92%] md:w-[75%] aspect-[1600/750] overflow-hidden shadow-sm">
                        <Image
                            src="/person-3.png"
                            alt="The Signature Shot"
                            fill
                            sizes="(max-width: 768px) 92vw, 75vw"
                            className="object-cover object-center"
                        />
                    </div>
                </div>
            </section>


            {/* SECTION 4: Bio & Philosophy */}
            <section className="relative min-h-screen w-full bg-[#F5F5F5] overflow-hidden flex flex-col">
                {/* Full BG Person Container */}
                <div className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
                    <Image
                        src="/person-4.png"
                        alt="F. R. Zulfikar Portrait"
                        fill
                        className="object-cover object-[50%_20%] md:object-top"
                        priority
                    />
                </div>

                {/* Container Utama */}
                <div className="relative z-10 flex flex-col w-full py-10 pb-32 md:pb-60">

                    {/* 1. Bagian Deskripsi */}``
                    <div className="w-full max-w-7xl px-12 md:px-24">
                        <div className="max-w-3xl space-y-10">
                            <div className="text-[12px] md:text-[16px] font-light leading-tight md:leading-snug text-zinc-700/90 text-left flex flex-col w-full">

                                <p className="whitespace-normal md:whitespace-nowrap">
                                    &quot;Bagi orang lain, mimpinya adalah kemustahilan. Tetapi bagi <span className="font-medium text-black">F.R. Zulfikar</span>, itu adalah sebuah janji.
                                </p>

                                <p className="whitespace-normal md:whitespace-nowrap">
                                    Di &apos;Piecita&apos;, sebuah kamar kecilnya, ia merajut rencana besar untuk membangun kota ikonik yang belum pernah dibayangkan manusia.
                                </p>

                                <p className="whitespace-normal md:whitespace-nowrap">
                                    Di tengah kepungan dinding sempit, ia berteman dengan sepi, mengubah keterbatasan menjadi bahan bakar kreativitas.
                                </p>

                                <p className="whitespace-normal md:whitespace-nowrap">
                                    Dengan kayu balsa di tangannya, ia menyusun detail mahakarya yang menantang batas akal. Ia sedang menulis ulang sejarahnya sendiri:
                                </p>

                                <p className="whitespace-normal md:whitespace-nowrap">
                                    bahwa dari ruang yang paling sesak sekalipun, seseorang bisa melahirkan visi yang akan mengubah wajah dunia.&quot;
                                </p>
                            </div>

                            <div className="pt-0">
                                <p className="text-xs md:text-[16px] sentence case text-zinc-700/90 font-light">
                                    Lahir di Bandung pada 8 April 1998.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Bagian Quotes */}
                    <div className="w-full flex justify-end mt-32 md:mt-40 px-10 md:px-24">
                        <div className="flex flex-col items-start text-left space-y-12 max-w-xl ml-auto">
                            <div className="italic text-zinc-500 font-light">
                                <p className="text-base md:text-[17px] leading-[1.3] opacity-80">
                                    &quot;..bagi saya, ini bukan sekadar profesi;<br />
                                    ini adalah manifestasi dari sebuah visi yang sedang saya perjuangkan&quot;
                                </p>
                            </div>

                            {/* Signature & Name Section */}
                            <div className="flex flex-col space-y-6">
                                <div className="relative w-[160px] md:w-[220px] aspect-[220/85]">
                                    <Image
                                        src="/signature.png"
                                        alt="Signature"
                                        fill
                                        sizes="(max-width: 768px) 160px, 220px"
                                        className="object-contain -ml-2 md:-ml-3"
                                    />
                                </div>

                                <div className="space-y-1.5 mt-1">
                                    <p className="text-lg md:text-xl font-normal text-black tracking-tight">
                                        F. R. Zulfikar
                                    </p>
                                    <p className="text-[12px] md:text-[13px] text-zinc-500 font-semibold sentence case tracking-wider">
                                        Founder and Chairman, Omaira Limited
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Formal Footer - 2 Row Layout (Sesuai Figma) */}
                    <div className="absolute bottom-6 w-full px-6 md:px-24">
                        <div className="pt-4 border-t border-zinc-200/50 flex flex-col gap-y-6 md:gap-y-8">

                            {/* BARIS ATAS: Language (Kiri) & Socials (Kanan) */}
                            <div className="flex flex-col md:flex-row justify-between items-center gap-y-4">

                                {/* Kiri: Language */}
                                <div className="flex items-center gap-2 group cursor-pointer">
                                    <Image
                                        src="/icon-world.png"
                                        alt="International"
                                        width={16}
                                        height={16}
                                        className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <span className="capitalize font-medium text-zinc-500 group-hover:text-black transition-colors tracking-tight text-[11px] md:text-[13px]">
                                        International: English
                                    </span>
                                </div>

                                {/* Kanan: Socials */}
                                <div className="flex items-center gap-x-4 md:gap-x-5">
                                    <span className="text-[11px] md:text-[13px] font-semibold text-zinc-800 tracking-tight mr-2">
                                        Follow Us
                                    </span>

                                    {/* Icon Threads */}
                                    <a href="#" className="hover:opacity-70 hover:-translate-y-1 transition-all duration-300 inline-block">
                                        <Image
                                            src="/icon-threads.png"
                                            alt="Threads"
                                            width={15}
                                            height={15}
                                            className="object-contain"
                                        />
                                    </a>

                                    {/* Icon X / Twitter */}
                                    <a href="#" className="hover:opacity-70 hover:-translate-y-1 transition-all duration-300 inline-block">
                                        <Image
                                            src="/icon-X.png"
                                            alt="X"
                                            width={13}
                                            height={13}
                                            className="object-contain"
                                        />
                                    </a>

                                    {/* Icon LinkedIn */}
                                    <a href="#" className="hover:opacity-70 hover:-translate-y-1 transition-all duration-300 inline-block">
                                        <Image
                                            src="/icon-linkedin.png"
                                            alt="LinkedIn"
                                            width={15}
                                            height={15}
                                            className="object-contain"
                                        />
                                    </a>

                                    {/* Icon Instagram */}
                                    <a href="#" className="hover:opacity-70 hover:-translate-y-1 transition-all duration-300 inline-block">
                                        <Image
                                            src="/icon-instagram.png"
                                            alt="Instagram"
                                            width={15}
                                            height={15}
                                            className="object-contain"
                                        />
                                    </a>
                                </div>

                            </div>

                            {/* BARIS BAWAH: Legal Links */}
                            <div className="flex items-center justify-center gap-x-3 text-black text-[10px] md:text-[11px]">
                                <a href="#" className="font-medium tracking-[0.05em] capitalize hover:opacity-70 transition-all duration-300">
                                    Terms of use
                                </a>
                                <span className="text-zinc-400">-</span>
                                <a href="#" className="font-medium tracking-[0.05em] capitalize hover:opacity-70 transition-all duration-300">
                                    Privacy notice
                                </a>
                                <span className="text-zinc-400">-</span>
                                <a href="#" className="font-medium tracking-[0.05em] capitalize hover:opacity-70 transition-all duration-300">
                                    Cookies
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DISCOVER FOOTER (Rolex Inspired Layout) */}
            <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-center justify-center text-center">
                {/* Background Image Container */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-perpetual.png"
                        alt="Perpetual Initiatives Background"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* Overlay Rolex Style */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col items-center space-y-8 px-8">

                    <h2 className="text-xl md:text-5xl font-semibold tracking-tight text-white text-center leading-relaxed">
                        Discover our Perpetual Initiatives
                    </h2>

                    <a
                        href="https://discoveryomaira.com"
                        target="_blank"
                        className="flex flex-row items-center justify-center gap-x-3 text-white/90 hover:text-white transition-all group"
                    >
                        <span className="text-[11px] md:text-base font-semibold tracking-[0.1em] sentence case border-b border-transparent group-hover:border-white/50 pb-1 transition-all">
                            Visit discoveryomaira.com
                        </span>

                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        >
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                    </a>
                </div>
            </section>

        </main >
    );
}