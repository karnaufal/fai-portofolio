"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search, Menu } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
    const container = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".parallax-card");

        gsap.to(cards[0] as HTMLElement, {
            y: -40,
            ease: "none",
            scrollTrigger: {
                trigger: cards[0] as HTMLElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            }
        });

        gsap.to(cards[1] as HTMLElement, {
            y: -180,
            ease: "none",
            scrollTrigger: {
                trigger: cards[1] as HTMLElement,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.5,
            }
        });

        gsap.to(cards[2] as HTMLElement, {
            y: -30,
            ease: "none",
            scrollTrigger: {
                trigger: cards[2] as HTMLElement,
                start: "top 95%",
                end: "bottom top",
                scrub: 0.5,
            }
        });
    }, { scope: container });

    return (

        <main ref={container} className="relative w-full bg-[#F5F5F5] font-sans text-black antialiased">

            {/* SECTION 1: Cinematic Hero */}
            <section className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center bg-black">

                {/* BACKGROUND IMAGE */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-art-detail.png"
                        alt="Art of Detail Background"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* TOP NAVIGATION (Menu & Search) */}
                <nav className="absolute top-0 inset-x-0 z-20 flex justify-between items-center px-6 md:px-8 py-6 md:py-8    text-white">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <Menu size={20} className="stroke-1" />
                        <span className="text-xs capitalized tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">Menu</span>
                    </div>

                    {/* SIGNATURE TOP CENTER */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-6 md:top-8">
                        <Image
                            src="/signature-frz-1.png"
                            alt="Fr. Zulfikar Signature"
                            width={70}
                            height={30}
                            style={{ width: '110px', height: 'auto' }}
                            className="object-contain brightness-0 invert opacity-90"
                        />
                    </div>

                    <div className="flex items-center gap-3 cursor-pointer group">
                        <span className="text-xs capitalized tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">Search</span>
                        <Search size={20} className="stroke-1" />
                    </div>
                </nav>

                {/* CENTER CONTENT: ART OF DETAIL - Full PNG Version */}
                <div className="relative z-10 select-none w-full px-4 flex justify-center">
                    <div className="flex-shrink-0 max-w-[90vw] md:max-w-3xl">
                        <Image
                            src="/artofdetail.png"
                            alt="Art of Detail"
                            width={800}
                            height={200}
                            priority
                            style={{ height: 'auto' }}
                            className="object-contain brightness-0 invert opacity-95 w-full h-auto"
                        />
                    </div>
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
                        <p className="text-[10px] md:text-xs capitalized font-semibold text-zinc-800">
                            — F. R. Zulfikar, Principal Indonesia.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 3: The Spectre Editorial Flow - Full Bleed Edition */}
            <section className="relative min-h-[150vh] md:min-h-[180vh] w-full bg-[#F5F5F5] py-10 pb-0 overflow-hidden">

                {/* Inner Container: FULL WIDTH tanpa pembatas 1400px */}
                <div className="relative w-full h-full">

                    <div className="parallax-card relative z-10 w-[80%] md:w-[40%] aspect-[4/5] overflow-hidden shadow-sm s">
                        <Image
                            src="/person-1.png"
                            alt="Visionary"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* 2. Gambar Kedua - THE FOREGROUND (Sekarang Overlapping Gambar 3) */}
                    <div className="parallax-card absolute right-0 top-[45%] md:top-[25%] z-50 w-[75%] md:w-[50%] aspect-[16/10] md:aspect-[4/3] overflow-hidden shadow-2xl">
                        <Image
                            src="/person-2.png"
                            alt="Detail Process"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* 3. Gambar Ketiga - THE ANCHOR (Sekarang di Belakang Gambar 2) */}
                    <div className="parallax-card relative z-10 left-1/2 -translate-x-1/2 w-[85%] md:w-[80%] aspect-[4/5] md:aspect-[21/9] overflow-hidden shadow-sm mb-[-5%] md:mb-[-10%]">
                        <Image
                            src="/person-3.png"
                            alt="The Signature Shot"
                            fill
                            className="object-center object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* SECTION 4: Bio & Philosophy */}
            <section className="relative min-h-screen w-full bg-[#F5F5F5] overflow-hidden flex flex-col mt-40">

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
                <div className="relative z-10 flex flex-col w-full py-20 pb-32 md:pb-60">

                    {/* 1. Bagian Deskripsi */}``
                    <div className="w-full max-w-7xl px-10 md:px-24">
                        <div className="max-w-3xl space-y-10">
                            <div className="text-xs md:text-[16px] font-light leading-[1.3] text-zinc-700/90 text-justify md:text-left">
                                <p>
                                    &quot;Bagi orang lain, mimpinya adalah kemustahilan. Tetapi bagi <span className="font-medium text-black">F.R. Zulfikar</span>, itu adalah sebuah janji.
                                    Di &apos;Piecita&apos;, sebuah kamar kecilnya, ia merajut rencana besar untuk membangun kota ikonik yang belum pernah dibayangkan manusia.
                                    Di tengah kepungan dinding sempit, ia berteman dengan sepi, mengubah keterbatasan menjadi bahan bakar kreativitas.
                                    Dengan kayu balsa di tangannya, ia menyusun detail mahakarya yang menantang batas akal. Ia sedang menulis ulang sejarahnya sendiri:
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
                                    <Image src="/signature.png" alt="Signature" fill className="object-contain -ml-2 md:-ml-3" />
                                </div>

                                <div className="space-y-1.5 mt-1">
                                    <p className="text-lg md:text-xl font-normal text-black tracking-tight">
                                        F. R. Zulfikar
                                    </p>
                                    <p className="text-[10px] md:text-[11px] text-zinc-500 font-medium capitalize tracking-wider">
                                        Founder and Chairman, Omaira Limited
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Formal Footer - Grid & Flex Hybrid Layout */}
                    <div className="absolute bottom-6 w-full px-6 md:px-24">
                        <div className="pt-4 border-t border-zinc-200/50">

                            <div className="flex flex-col md:grid md:grid-cols-3 items-center min-h-[40px] gap-y-6">

                                <div className="flex items-center gap-2 group cursor-pointer md:justify-self-start">
                                    <span className="text-sm font-medium grayscale group-hover:grayscale-0 transition-all duration-500">🌐</span>
                                    <span className="capitalize font-medium text-zinc-500 group-hover:text-black transition-colors tracking-tight text-[11px] md:text-[13px]">
                                        International: English
                                    </span>
                                </div>

                                <div className="flex items-center justify-center gap-x-4 text-black text-[10px] md:text-[11px] md:justify-self-center">
                                    <a href="#" className="font-medium tracking-[0.05em] capitalize hover:opacity-70 transition-all duration-300">
                                        Terms of use
                                    </a>
                                    <span className="text-zinc-300">|</span>
                                    <a href="#" className="font-medium tracking-[0.05em] capitalize hover:opacity-70 transition-all duration-300">
                                        Privacy notice
                                    </a>
                                    <span className="text-zinc-300">|</span>
                                    <a href="#" className="font-medium tracking-[0.05em] capitalize hover:opacity-70 transition-all duration-300">
                                        Cookies
                                    </a>
                                </div>

                                <div className="hidden md:block"></div>

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

                    <h2 className="text-xl md:text-5xl font-medium tracking-tight text-white drop-shadow-lg text-center leading-relaxed">
                        Discover our Perpetual Initiatives
                    </h2>

                    <a
                        href="https://discoveryomaira.com"
                        target="_blank"
                        className="flex flex-row items-center justify-center gap-x-3 text-white/90 hover:text-white transition-all group"
                    >
                        <span className="text-[11px] md:text-base font-light tracking-[0.2em] sentence case border-b border-transparent group-hover:border-white/50 pb-1 transition-all">
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