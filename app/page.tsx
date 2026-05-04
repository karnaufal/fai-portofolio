"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/fade-up";
import SectionCurtain from "@/components/section-curtain";
import ScrollIndicatorLine from "@/components/scroll-indicator-line";

export default function Home() {
  return (
    <>
      <main className="h-screen overflow-y-scroll snap-y snap-mandatory [scroll-behavior:smooth] bg-black font-sans text-white antialiased">

        {/* ============================================================
                    SECTION 1: Masterpiece Header
                ============================================================ */}
        <SectionCurtain
          className="relative flex h-screen w-full snap-start flex-col items-center bg-black"
          duration={1.4}
          delay={0.2}
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-flower-blur.png"
              alt="Artistic flower background"
              fill
              className="object-cover opacity-60 blur"
              priority
            />
            <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center w-full h-full px-12 md:px-20 pt-16 pb-10">

            {/* Signature */}
            <FadeUp delay={0.8} duration={1}>
              <div className="w-full flex flex-col items-center">
                <div className="mb-6 opacity-95">
                  <Image
                    src="/signature-frz.png"
                    alt="Fr. Zulfikar Signature"
                    width={120}
                    height={70}
                    style={{ width: "auto", height: "auto" }}
                    className="object-contain brightness-0 invert"
                    priority
                  />
                </div>
              </div>
            </FadeUp>

            {/* Full-width horizontal line — break out dari padding container */}
            <FadeUp delay={0.85} duration={1}>
              <div className="w-screen h-[1px] bg-white -mx-[max(3rem,10vw)]" />
            </FadeUp>

            {/* Headline */}
            <div className="flex-1 flex items-center justify-center w-full">
              <FadeUp delay={1} duration={1}>
                <h1 className="text-[15px] text-center leading-[2] px-6 md:text-3xl lg:text-4xl md:leading-normal md:whitespace-nowrap font-light uppercase text-white/90">
                  Timeless Interpretation <br className="block md:hidden" /> of Art and Masterpieces
                </h1>
              </FadeUp>
            </div>

          </div>
        </SectionCurtain>

        {/* ============================================================
                    SECTION 2: Navigation Hub
                ============================================================ */}
        <SectionCurtain
          className="relative flex h-screen w-full snap-start items-center justify-center bg-black overflow-hidden"
          duration={1.2}
          delay={0.05}
        >
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/bg-siluet.png"
              alt="Silhouette background"
              fill
              className="object-cover grayscale opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
          </div>

          {/* Nav Links */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-x-20">

              <FadeUp delay={0.5} duration={0.8}>
                <Link href="/about" className="group flex flex-col items-center">
                  <span className="block md:hidden text-[10px] tracking-[0.15em] text-zinc-500 uppercase mb-2">Discover</span>
                  <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-white/90 group-hover:tracking-[0.2em] transition-all duration-500">
                    About Us
                  </h2>
                </Link>
              </FadeUp>

              <div className="hidden md:block h-12 w-[1px] bg-white/10" />

              <FadeUp delay={0.6} duration={0.8}>
                <Link href="/initiative" className="group flex flex-col items-center">
                  <span className="block md:hidden text-[10px] tracking-[0.15em] text-zinc-500 uppercase mb-2">Our Vision</span>
                  <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-white/90 group-hover:tracking-[0.2em] transition-all duration-500">
                    Initiative
                  </h2>
                </Link>
              </FadeUp>

              <div className="hidden md:block h-12 w-[1px] bg-white/10" />

              <FadeUp delay={0.7} duration={0.8}>
                <Link href="/foundation" className="group flex flex-col items-center">
                  <span className="block md:hidden text-[10px] tracking-[0.15em] text-zinc-500 uppercase mb-2">Community</span>
                  <h2 className="text-xl md:text-2xl font-light tracking-[0.15em] uppercase text-white/90 group-hover:tracking-[0.2em] transition-all duration-500">
                    Foundation
                  </h2>
                </Link>
              </FadeUp>

            </div>
          </div>

          {/* Quote & Signature — Bottom */}
          <div className="absolute bottom-20 md:bottom-24 z-10 flex flex-col items-center w-full px-8">
            <div className="absolute bottom-20 md:bottom-20 z-10 flex flex-col items-center w-full px-10">
              <FadeUp delay={0.8} duration={0.8}>
                <p className="text-[11px] md:text-sm font-medium italic tracking-[0.1em] text-zinc-400 text-center leading-[1.8]">
                  F. R. Zulfikar adalah seorang anak laki-laki yang ingin menciptakan{" "}
                  <br className="hidden md:block" /> landscape terindah di dunia.
                </p>
              </FadeUp>
            </div>

            <div className="relative flex flex-col items-center justify-center w-full">
              <div className="relative h-16 w-48 md:w-56 flex items-center justify-center">
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <Image
                    src="/signature-1.png"
                    alt="Signature"
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="object-contain brightness-0 invert opacity-70"
                  />
                </div>
                <div className="relative z-10 w-full text-start">
                  <h3 className="text-sm md:text-lg font-light text-white leading-none whitespace-nowrap translate-x-[-8px] translate-y-[6px] md:translate-x-[-15px] md:translate-y-[10px]">
                    F. R. Zulfikar
                  </h3>
                </div>
              </div>
            </div>
          </div>

        </SectionCurtain>

      </main>

      {/* Fixed — di luar main biar nggak terkurung snap container */}
      <ScrollIndicatorLine />
    </>
  );
}
