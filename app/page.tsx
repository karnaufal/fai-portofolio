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
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light uppercase text-white/90 whitespace-nowrap tracking-normal">
              Timeless Interpretation of Art and Masterpieces
            </h1>
          </div>

          {/* 3. BOTTOM AREA: Vertical Line - Tembus ke Bawah */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-24 w-[1px] bg-white opacity-100"></div>

        </div>
      </section>

      {/* SECTION 2: Navigation Hub (image_420403.jpg) */}
      <section className="relative flex h-screen w-full snap-start items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/bg-siluet.png"
            alt="Silhouette background"
            fill
            className="object-cover grayscale"
          />
          {/* Overlay minimalis sesuai blueprint Figma */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-10">

          <div className="flex w-full flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-center">
            <Link href="/about" className="group">
              <h2 className="text-4xl font-extralight tracking-widest text-zinc-400 transition-colors group-hover:text-white uppercase">
                About Us
              </h2>
            </Link>

            <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

            <Link href="/initiative" className="group">
              <h2 className="text-4xl font-extralight tracking-widest text-zinc-400 transition-colors group-hover:text-white uppercase">
                Initiative
              </h2>
            </Link>

            <div className="hidden md:block h-16 w-[1px] bg-white/20"></div>

            <Link href="/foundation" className="group">
              <h2 className="text-4xl font-extralight tracking-widest text-zinc-400 transition-colors group-hover:text-white uppercase">
                Foundation
              </h2>
            </Link>
          </div>

          <div className="mt-40 max-w-2xl text-center">
            <p className="text-xl font-extralight tracking-widest text-zinc-300 italic leading-relaxed">
              &quot;F. R. Zulfikar adalah seorang anak laki-laki yang ingin menciptakan landscape terindah di dunia.&quot;
            </p>

            <div className="mt-20 flex flex-col items-center">
              {/* CONTAINER SIGNATURE & TEXT OVERLAY */}
              <div className="relative flex items-center justify-center mb-10 h-32 w-full max-w-lg mx-auto">

                {/* 1. Signature PNG - The Oversized, Artful Background */}
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                  <Image
                    src="/signature-1.png"
                    alt="Fr. Zulfikar Signature"
                    width={250}
                    height={80}
                    // style={{ width: 'auto', height: 'auto' }}
                    className="object-contain brightness-0 invert opacity-70"
                  />
                </div>

                {/* 2. Nama Teks - The Precise Baseline */}
                <div className="relative z-10 w-full text-left">
                  <h3 className="text-xl font-light tracking-[0.3em] capitalized text-white leading-none whitespace-nowrap">
                    F. R. Zulfikar
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}