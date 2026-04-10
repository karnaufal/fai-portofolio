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
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]"></div>
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div className="relative z-10 flex flex-col items-center w-full h-full max-w-7xl px-12 md:px-20 pt-16 pb-10">

          {/* 1. TOP AREA: Signature & Line */}
          <div className="w-full flex flex-col items-center">
            <div className="mb-12 opacity-95">
              <Image
                src="/signature-frz.png"
                alt="Fr. Zulfikar Signature"
                width={120}
                height={70}
                className="object-contain brightness-0 invert"
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
          {/* Menghilangkan pb-10 di container dan pake h-32 atau lebih biar tembus border section */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[1px] bg-white opacity-100"></div>

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

            <div className="mt-16 flex flex-col items-center gap-4">
              <div className="text-sm tracking-[0.4em] uppercase text-zinc-500">F. R. Zulfikar</div>
              {/* Garis bawah tanda tangan dari Figma */}
              <div className="h-[1px] w-48 bg-white/30"></div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}