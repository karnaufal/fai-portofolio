import { Analytics } from "@vercel/analytics/next"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black font-sans text-white antialiased">

      {/* SECTION 1: Masterpiece Header (image_4203e5.jpg) */}
      <section className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-flower-blur.png"
            alt="Artistic flower background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay minimalis sesuai blueprint Figma */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-12 px-10 w-full max-w-7xl">
          {/* Tanda Tangan / Logo Fr. Zulfikar */}
          <div className="text-3xl font-extralight tracking-[0.3em] text-zinc-200">
            Fr. Zulfikar
          </div>

          <div className="h-[1px] w-full bg-white/20"></div>

          <h1 className="text-center text-3xl font-light tracking-[0.2em] leading-tight uppercase text-white sm:text-5xl md:text-6xl">
            Timeless Interpretation of Art and Masterpieces
          </h1>
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