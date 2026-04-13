"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Search, Menu } from "lucide-react";

// Registrasi plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
    const container = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".parallax-card");
        cards.forEach((card: any, i) => {
            gsap.to(card, {
                y: i === 0 ? -60 : i === 1 ? -40 : -120,
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        });
    }, { scope: container });

    return (

        <main ref={container} className="relative w-full bg-white font-sans text-black antialiased">

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
                <nav className="absolute top-0 inset-x-0 z-20 flex justify-between items-center px-8 py-8 text-white">
                    <div className="flex items-center gap-3 cursor-pointer group">
                        <Menu size={20} className="stroke-1" />
                        <span className="text-xs capitalized tracking-[0.2em] font-light group-hover:opacity-70 transition-opacity">Menu</span>
                    </div>

                    {/* SIGNATURE TOP CENTER */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-8">
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

                {/* CENTER CONTENT: ART OF DETAIL - Clean Horizontal Layout */}
                <div className="relative z-10 select-none w-full px-4 flex justify-center">
                    <div className="flex items-center gap-6 md:gap-10">

                        {/* "ART OF" - Sans Serif Clean */}
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-light uppercase text-white leading-none whitespace-nowrap">
                            Art of
                        </h1>

                        {/* "Detail" PNG - Sejajar di Samping (No Overlap) */}
                        <div className="flex-shrink-0">
                            <Image
                                src="/detail.png"
                                alt="Detail Script"
                                width={350}
                                height={150}
                                priority
                                style={{ height: 'auto' }}
                                className="object-contain brightness-0 invert opacity-95 w-auto"
                            />
                        </div>

                    </div>
                </div>

                {/* BOTTOM DECORATION  */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-[1px] bg-white opacity-40"></div>
            </section>

            {/* SECTION 2: Editorial Portrait Intro - Updated with Full Quote */}
            <section className="relative flex h-screen w-full items-center justify-center bg-white p-10 md:p-24 overflow-hidden border-b border-zinc-50">
                <div className="flex flex-col items-center justify-center max-w-5xl text-center space-y-16">

                    {/* Title: Lebih besar & italic */}
                    <h2 className="text-2xl md:text-5xl font-normal italic tracking-tight leading-[1.2] text-zinc-900">
                        Seorang anak yang ingin menciptakan <br className="hidden md:block" /> landscape terindah di dunia.
                    </h2>

                    {/* Long Quote: Styling lebih halus & lebar */}
                    <div className="space-y-10">
                        <p className="text-zinc-500 font-semi-bold leading-relaxed text-base md:text-xl max-w-4xl mx-auto italic px-4">
                            &quot;Saya meyakini bahwa saat saya membidikkan busur visioner ke arah bintang dan membiarkan diri melayang di atas sayap mimpi menuju tujuan yang tak biasa—di situlah, dalam dahaga akan kesempurnaan dan pemberontakan terhadap banalitas, saya sedang mengalirkan sebuah mata air idealisme yang misterius.&quot;
                        </p>

                        {/* Author Attribution */}
                        <p className="text-[10px] md:text-xs capitalized font-semibold text-zinc-800">
                            — F. R. Zulfikar, Principal Indonesia.
                        </p>
                    </div>

                </div>
            </section>

            {/* SECTION 3: Custom Overlap (Foto 2 & 3 Bertabrakan) */}
            <section className="relative min-h-[160vh] w-full bg-[#F5F5F5] py-32 overflow-hidden">
                <div className="relative w-full h-full max-w-[1400px] mx-auto">

                    {/* Foto 1: Normal (Gak Overlapping) */}
                    <div className="parallax-card relative z-10 w-[45%] aspect-[4/5] overflow-hidden bg-zinc-200 ml-10 md:ml-20 shadow-lg">
                        <Image src="/person-1.png" alt="1" fill sizes="50vw" className="object-cover" />
                    </div>

                    {/* Foto 2: Mepet ke Luar (Right Bleed) */}
                    <div className="parallax-card absolute right-[-5%] top-[25%] z-20 w-[60%] md:w-[50%] aspect-[16/10] overflow-hidden bg-zinc-300 shadow-2xl">
                        <Image src="/person-2.png" alt="2" fill sizes="60vw" className="object-cover grayscale" />
                    </div>

                    {/* Foto 3: Centered & Overlapping Foto 2 */}
                    <div className="parallax-card absolute left-1/2 -translate-x-1/2 top-[55%] z-30 w-[50%] md:w-[40%] aspect-[3/4] overflow-hidden bg-zinc-400 shadow-2xl">
                        <Image src="/person-3.png" alt="3" fill sizes="40vw" className="object-cover" />
                    </div>

                </div>
            </section>

            {/* SECTION 4: Bio & Philosophy - The 'Piecita' Narrative */}
            <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col">

                {/* Full BG Person Container */}
                <div className="relative h-[85vh] w-full overflow-hidden">
                    <Image
                        src="/person-4.png"
                        alt="F. R. Zulfikar Portrait"
                        fill
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* Container Utama */}
                <div className="relative z-10 flex flex-col w-full py-20">

                    {/* 1. Bagian Deskripsi - Elegant Reading Size */}
                    <div className="w-full max-w-7xl px-10 md:px-24">
                        <div className="max-w-3xl space-y-12"> {/* Space-y naik ke 12 biar lebih lega */}
                            <div className="text-base md:text-[20px] font-light leading-[1.8] text-zinc-700/90 tracking-wide text-justify md:text-left">
                                <p>
                                    &quot;Bagi orang lain, mimpinya adalah kemustahilan. Tetapi bagi <span className="font-medium text-black">F.R. Zulfikar</span>, itu adalah sebuah janji.
                                    Di &apos;Piecita&apos;, sebuah kamar kecilnya, ia merajut rencana besar untuk membangun kota ikonik yang belum pernah dibayangkan manusia.
                                    Di tengah kepungan dinding sempit, ia berteman dengan sepi, mengubah keterbatasan menjadi bahan bakar kreativitas.
                                    Dengan kayu balsa di tangannya, ia menyusun detail mahakarya yang menantang batas akal. Ia sedang menulis ulang sejarahnya sendiri:
                                    bahwa dari ruang yang paling sesak sekalipun, seseorang bisa melahirkan visi yang akan mengubah wajah dunia.&quot;
                                </p>
                            </div>

                            <div className="pt-2">
                                {/* Ukuran font dibikin lebih kecil & tracking lebih jauh buat kesan premium */}
                                <p className="text-[9px] md:text-[10px] tracking-[0.5em] sentence case text-zinc-500 font-medium">
                                    Lahir di Bandung pada 8 April 1998
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Bagian Quotes - Right Aligned Container with Left Aligned Content */}
                    <div className="w-full flex justify-end mt-32 md:mt-40 px-10 md:px-24">
                        <div className="flex flex-col items-start text-left space-y-10 max-w-xl ml-auto">
                            <div className="italic text-zinc-500 font-light">
                                {/* Quote size diturunin dikit biar lebih subtle & elegant */}
                                <p className="text-base md:text-[17px] leading-[1.7] opacity-80">
                                    &quot;..bagi saya, ini bukan sekadar profesi;<br />
                                    ini adalah manifestasi dari sebuah visi yang sedang saya perjuangkan&quot;
                                </p>
                            </div>

                            {/* Signature - Ukuran digedein biar lebih bold */}
                            <div className="flex justify-start">
                                <Image
                                    src="/signature.png"
                                    alt="Signature"
                                    width={220}
                                    height={85}
                                    style={{ width: 'auto', height: 'auto' }}
                                    priority
                                    className="grayscale opacity-90 object-contain -ml-3"
                                />
                            </div>

                            {/* Name & Title Section */}
                            <div className="space-y-1.5">
                                <p className="text-lg md:text-xl font-normal text-black tracking-tight">
                                    F. R. Zulfikar
                                </p>
                                <p className="text-[10px] md:text-[11px] text-zinc-500 font-medium capitalized">
                                    Founder and Chairman, Omaira Limited
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Formal Footer - Minimalist Fine Print (Final Polish) */}
                    <div className="w-full max-w-7xl mx-auto px-10 md:px-24 mt-40">
                        <div className="pt-12 border-t border-zinc-100 pb-24">
                            <div className="flex flex-col gap-16 text-[10px] md:text-[11px] font-normal">

                                {/* 1. Language Picker - High Contrast on Hover */}
                                <div className="flex items-center gap-3 group cursor-pointer w-fit">
                                    <span className="text-base grayscale group-hover:grayscale-0 transition-all duration-500">🌐</span>
                                    <span className="tracking-[0.15em] capitalized text-zinc-800 group-hover:text-black transition-colors">
                                        International: English
                                    </span>
                                </div>

                                {/* 2. Legal Links - Clean & Minimalist */}
                                <div className="flex flex-wrap justify-center items-center gap-x-6 md:gap-x-8 text-zinc-500">
                                    <a href="#" className="hover:text-black tracking-widest capitalized transition-all duration-300">
                                        Terms of use
                                    </a>
                                    <span className="text-zinc-500 font-extralight">|</span>
                                    <a href="#" className="hover:text-black tracking-widest capitalized transition-all duration-300">
                                        Privacy notice
                                    </a>
                                    <span className="text-zinc-500 font-extralight">|</span>
                                    <a href="#" className="hover:text-black tracking-widest capitalized transition-all duration-300">
                                        Cookies
                                    </a>
                                </div>

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
                    {/* Overlay Rolex Style: Gradasi Gelap di Pinggir (Vignette) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col items-center space-y-6 px-6">
                    {/* Font dibuat lebih rapat trackingnya tapi tetep clean */}
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white drop-shadow-lg">
                        Discover our Perpetual Initiatives
                    </h2>

                    {/* Link dengan styling yang lebih subtle */}
                    <a
                        href="https://discoveryomaira.com"
                        target="_blank"
                        className="flex items-center gap-2.5 text-white/90 hover:text-white transition-all group"
                    >
                        <span className="text-sm md:text-base font-light tracking-widest capitalized border-b border-transparent group-hover:border-white/50 pb-0.5 transition-all">
                            Visit discoveryomaira.com
                        </span>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="opacity-80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
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