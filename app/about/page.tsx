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

            {/* SECTION 2: Editorial Portrait Intro - Updated with Full Quote */}
            <section className="relative flex h-screen w-full items-center justify-center bg-white p-10 md:p-24 overflow-hidden border-b border-zinc-50">
                <div className="flex flex-col items-center justify-center max-w-5xl text-center space-y-16">

                    {/* Title: Lebih besar & italic */}
                    <h2 className="text-4xl md:text-7xl font-light italic tracking-tight leading-[1.2] text-zinc-900">
                        Seorang anak yang ingin menciptakan <br className="hidden md:block" /> landscape terindah di dunia.
                    </h2>

                    {/* Long Quote: Styling lebih halus & lebar */}
                    <div className="space-y-10">
                        <p className="text-zinc-400 font-light leading-relaxed text-base md:text-xl max-w-4xl mx-auto italic px-4">
                            &quot;Saya meyakini bahwa saat saya membidikkan busur visioner ke arah bintang dan membiarkan diri melayang di atas <span className="text-zinc-800 font-medium">sayap mimpi</span> menuju tujuan yang tak biasa—di situlah, dalam dahaga akan kesempurnaan dan pemberontakan terhadap banalitas, saya sedang mengalirkan sebuah mata air idealisme yang misterius.&quot;
                        </p>

                        {/* Author Attribution */}
                        <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-semibold text-zinc-800">
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
                    {/* Gradient overlay buat transisi teks yang lebih smooth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>

                    {/* Watermark Tahun */}
                    <div className="absolute -left-16 bottom-10 text-[15rem] md:text-[20rem] font-black text-black/5 select-none z-0">
                        1998
                    </div>
                </div>

                {/* Content Area */}
                <div className="relative z-10 flex flex-col w-full max-w-7xl mx-auto px-10 md:px-24 py-20">

                    {/* Deskripsi Narasi 'Piecita' */}
                    <div className="max-w-4xl space-y-10">
                        <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed text-zinc-800">
                            <p>
                                Banyak orang beranggapan mimpinya untuk membangun kota ikonik dengan landscape terindah di dunia adalah omong kosong. Namun bagi <span className="font-semibold text-black">F.R. Zulfikar, mimpi mempunyai ruangnya sendiri.</span>
                            </p>
                            <p>
                                Di dalam &apos;Piecita&apos; atau sebuah kamar sempit serupa lemari di sudut kota Bandung —sepi dan perenungan adalah kawan setianya. Bermodalkan imajinasi dan serat kayu balsa, ia mengukir detail demi detail mahakarya yang mustahil bagi orang lain.
                            </p>
                            <p>
                                Di ruang yang membatasi gerak fisik inilah, imajinasinya justru terbang tanpa batas, ia bertekad untuk membuktikan jika mimpi besar bisa lahir dari tempat yang paling bersahaja.
                            </p>
                        </div>

                        {/* Tempat & Tanggal Lahir */}
                        <div className="pt-4">
                            <p className="text-sm tracking-[0.4em] uppercase text-zinc-400 font-medium">
                                Lahir di Bandung pada 8 April 1998
                            </p>
                        </div>
                    </div>

                    {/* Quotes, Signature, & Name (Aligned Right) */}
                    <div className="self-end flex flex-col items-end text-right space-y-8 mt-24 max-w-md">
                        <div className="italic text-zinc-500 font-light space-y-6">
                            <p className="text-xl md:text-2xl leading-relaxed">
                                &quot;Walaupun dia jalannya lambat. Tapi kura-kura pasti akan sampai ke tujuan.&quot;
                            </p>
                            <div className="flex justify-end">
                                <div className="relative w-[200px] h-[80px]">
                                    <Image
                                        src="/signature.png"
                                        alt="Signature"
                                        fill
                                        sizes="200px"
                                        className="grayscale opacity-90 object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="h-[1px] w-48 bg-black/10 mb-6 ml-auto"></div>
                            <p className="text-3xl font-medium tracking-wide text-black uppercase">F. R. Zulfikar</p>
                            <p className="text-sm text-zinc-400 tracking-[0.3em] uppercase">Chairman, Omaira Limited</p>
                        </div>
                    </div>

                    {/* Formal Footer */}
                    <div className="w-full pt-16 border-t border-zinc-100 mt-32">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.4em] uppercase text-zinc-400 font-semibold pb-10">
                            <div className="flex items-center gap-3 group cursor-pointer">
                                <span className="text-lg">🌐</span>
                                <span className="group-hover:text-black transition-colors">International: English</span>
                            </div>
                            <div className="flex gap-10">
                                <a href="#" className="hover:text-black transition-colors">Terms of use</a>
                                <a href="#" className="hover:text-black transition-colors">Privacy notice</a>
                                <a href="#" className="hover:text-black transition-colors">Cookies</a>
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