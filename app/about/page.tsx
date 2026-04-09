"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
                // Foto 1 gerak standar, Foto 2 gerak lambat, Foto 3 (tengah) gerak paling cepet
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
        // HAPUS snap-y snap-mandatory, ganti overflow-y-scroll jadi default
        <main ref={container} className="relative w-full bg-white font-sans text-black antialiased">

            {/* SECTION 1: Cinematic Hero (HAPUS snap-start) */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-art-detail.png"
                        alt="Art of Detail Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="text-6xl md:text-9xl font-extralight tracking-[0.2em] text-white uppercase mix-blend-difference">
                        Art of Detail
                    </h1>
                    <div className="mt-8 h-[1px] w-24 bg-white/40 mx-auto"></div>
                </div>
            </section>

            {/* SECTION 2: Editorial Portrait Intro (HAPUS snap-start) */}
            <section className="relative flex h-screen w-full items-center justify-center bg-white p-10 md:p-24 overflow-hidden">
                <div className="flex flex-col items-center justify-center max-w-4xl text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-light italic tracking-tight leading-tight text-zinc-900">
                        Seorang anak yang ingin menciptakan landscape terindah di dunia.
                    </h2>
                    <div className="h-[1px] w-20 bg-zinc-200"></div>
                    <div className="space-y-8 text-zinc-600 font-light leading-relaxed">
                        <p className="text-lg md:text-xl max-w-2xl mx-auto">
                            &quot;Saya meyakini bahwa saat saya membidikkan busur visioner ke arah bintang... saya sedang membawa sebuah sumber ideal yang misterius.&quot;
                        </p>
                        <p className="text-xs tracking-[0.4em] uppercase font-medium text-black">
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

            {/* SECTION 4: Bio & Philosophy (HAPUS snap-start) */}
            <section className="relative flex h-screen w-full items-center justify-center bg-white p-10 md:px-24 md:pb-8 md:pt-24 overflow-hidden">
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-[20rem] md:text-[25rem] font-black text-zinc-50 select-none z-0">
                    1998
                </div>

                <div className="relative z-10 flex flex-col h-full w-full max-w-7xl">
                    <div className="mt-auto max-w-3xl space-y-8 text-lg md:text-xl font-light leading-relaxed text-zinc-800">
                        <p>
                            Banyak orang beranggapan mimpinya adalah omong kosong. Namun bagi <span className="font-semibold text-black">F.R. Zulfikar, mimpi mempunyai ruangnya sendiri.</span>
                        </p>
                    </div>

                    <div className="self-end flex flex-col items-end text-right space-y-6 mt-12 mb-12 md:mb-16">
                        <div className="relative w-[180px] h-[60px]">
                            <Image
                                src="/signature.png"
                                alt="Signature"
                                fill
                                sizes="180px"
                                className="grayscale opacity-90 object-contain"
                                priority
                            />
                        </div>
                        <div className="space-y-1">
                            <p className="text-2xl font-medium tracking-wide text-black">F. R. Zulfikar</p>
                            <p className="text-sm text-zinc-400 tracking-[0.2em] uppercase">Chairman, Omaira Limited</p>
                        </div>
                    </div>

                    <div className="w-full pt-8 border-t border-zinc-100 mt-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium pb-4">
                            <span>International: English</span>
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-black transition-colors">Terms of use</a>
                                <a href="#" className="hover:text-black transition-colors">Privacy notice</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DISCOVER FOOTER (HAPUS snap-start) */}
            <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center p-10 text-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-perpetual.png"
                        alt="Perpetual"
                        fill
                        className="object-cover fixed top-0"
                        style={{ transform: 'translateZ(-1px)' }}
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <h2 className="relative z-10 text-5xl md:text-7xl font-bold text-white">
                    Discover our Perpetual Initiatives
                </h2>
            </section>

        </main >
    );
}