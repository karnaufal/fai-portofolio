import { Analytics } from "@vercel/analytics/next"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black font-sans text-white antialiased">

      {/* SECTION 1: Masterpiece Header - Perfect Center Adjustment */}
      <section className="relative flex h-screen w-full snap-start flex-col items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-flower-blur.png"
            alt="Artistic flower background"
            fill
            className="object-cover opacity-60 blur"
            priority
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center w-full h-full max-w-7xl px-12 md:px-20 pt-16 pb-10">

          {/* 1. TOP AREA: Signature & Line */}
          <div className="w-full flex flex-col items-center">
            <div className="mb-6 opacity-95">
              <Image
                src="/signature-frz.png"
                alt="Fr. Zulfikar Signature"
                width={120}
                height={70}
                style={{ width: 'auto', height: 'auto' }}
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            {/* Garis Horizontal - Putih Solid */}
            <div className="h-[1px] w-full bg-white opacity-100"></div>
          </div>

          {/* 2. CENTER AREA: The Headline */}
          <div className="flex-1 flex items-center justify-center w-full">
            <h1 className="text-[15px] text-center leading-[2] px-6 md:text-3xl lg:text-4xl md:leading-normal md:whitespace-nowrap font-light uppercase text-white/90">
              Timeless Interpretation <br className="block md:hidden" /> of Art and Masterpieces
            </h1>
          </div>

          {/* 3. BOTTOM AREA: Vertical Line - Tembus ke Bawah */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-[1px] bg-white opacity-100"></div>

        </div>
      </section>

      {/* SECTION 2: Navigation Hub - Figma Exact Match (Absolute Bottom) */}
      <section className="relative flex h-screen w-full snap-start items-center justify-center bg-black overflow-hidden">

        {/* Background & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-siluet.png"
            alt="Silhouette background"
            fill
            className="object-cover grayscale opacity-30"
          />
          {/* Gradasi gelap ke bawah biar teks quote lebih kebaca */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
        </div>

        {/* 2. CENTER AREA: Navigasi Hub */}
        <div className="flex-1 flex items-center justify-center w-full">
          {/* flex-col di mobile, md:flex-row di desktop */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-20">

            {/* ABOUT US */}
            <Link href="/about" className="group">
              <div className="flex flex-col items-center">
                {/* Muncul cuma di mobile (block), ilang di desktop (md:hidden) */}
                <span className="block md:hidden text-[10px] tracking-[0.15em] text-zinc-500 uppercase mb-2">
                  Discover
                </span>
                <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-white/90 group-hover:tracking-[0.2em] transition-all duration-500">
                  About Us
                </h2>
              </div>
            </Link>

            <div className="hidden md:block h-12 w-[1px] bg-white/10"></div>

            {/* INITIATIVE */}
            <Link href="/initiative" className="group">
              <div className="flex flex-col items-center">
                <span className="block md:hidden text-[10px] tracking-[0.15em] text-zinc-500 uppercase mb-2">
                  Our Vision
                </span>
                <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-white/90 group-hover:tracking-[0.2em] transition-all duration-500">
                  Initiative
                </h2>
              </div>
            </Link>

            <div className="hidden md:block h-12 w-[1px] bg-white/10"></div>

            {/* FOUNDATION */}
            <Link href="/foundation" className="group">
              <div className="flex flex-col items-center">
                <span className="block md:hidden text-[10px] tracking-[0.15em] text-zinc-500 uppercase mb-2">
                  Community
                </span>
                <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-white/90 group-hover:tracking-[0.2em] transition-all duration-500">
                  Foundation
                </h2>
              </div>
            </Link>

          </div>
        </div>

        {/* 2 & 3. QUOTE & SIGNATURE - ABSOLUTE BOTTOM */}
        <div className="absolute bottom-20 md:bottom-24 z-10 flex flex-col items-center w-full px-8">

          {/* Central Quote - Jarak tipis ke Signature */}
          <div className="absolute bottom-20 md:bottom-20 z-10 flex flex-col items-center w-full px-10">
            <p className="text-[11px] md:text-sm font-medium italic tracking-[0.1em] text-zinc-400 text-center leading-[1.8]">
              F. R. Zulfikar adalah seorang anak laki-laki yang ingin menciptakan <br className="hidden md:block" /> landscape terindah di dunia.
            </p>
          </div>

          {/* Signature - Skala diperkecil & Compact */}
          <div className="relative flex flex-col items-center justify-center w-full">
            <div className="relative h-16 w-48 md:w-56 flex items-center justify-center">
              {/* Signature PNG */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <Image
                  src="/signature-1.png"
                  alt="Signature"
                  fill
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-contain brightness-0 invert opacity-70"
                />
              </div>
              {/* Container Nama - Kita pake Translate buat presisi 1:1 */}
              <div className="relative z-10 w-full text-start">
                <h3 className="text-sm md:text-lg font-light capitalized text-white leading-none whitespace-nowrap translate-x-[-8px] translate-y-[6px] md:translate-x-[-15px] md:translate-y-[10px]">
                  F. R. Zulfikar
                </h3>
              </div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}