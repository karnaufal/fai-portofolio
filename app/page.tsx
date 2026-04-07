// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black font-sans text-white antialiased">

      {/* SECTION 1: Masterpiece Header */}
      <section className="relative flex h-screen w-full snap-start items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Pastikan gambar ini ada di folder /public atau ganti dengan warna sementara bg-zinc-900 */}
          <div className="absolute inset-0 bg-zinc-900"></div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[6px]"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-12 px-10 w-full max-w-7xl">
          <div className="text-3xl font-extralight tracking-[0.3em] text-zinc-300">
            F. R. Zulfikar
          </div>

          <div className="h-[1px] w-full bg-zinc-800"></div>

          <h1 className="text-center text-3xl font-light tracking-[0.2em] leading-tight uppercase text-white sm:text-5xl md:text-6xl">
            Timeless Interpretation of Art and Masterpieces
          </h1>
        </div>
      </section>

      {/* SECTION 2: Navigation Hub */}
      <section className="relative flex h-screen w-full snap-start items-center justify-center bg-black">
        <div className="absolute inset-0 z-0 opacity-30 bg-zinc-900"></div>

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center px-10">

          <div className="flex w-full flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-center">

            <Link href="/about" className="group">
              <h2 className="text-3xl font-extralight tracking-widest text-zinc-400 transition-colors group-hover:text-white uppercase">
                About Us
              </h2>
            </Link>

            <div className="hidden md:block h-12 w-[1px] bg-zinc-800"></div>

            <Link href="/initiative" className="group">
              <h2 className="text-3xl font-extralight tracking-widest text-zinc-400 transition-colors group-hover:text-white uppercase">
                Initiative
              </h2>
            </Link>

            <div className="hidden md:block h-12 w-[1px] bg-zinc-800"></div>

            <Link href="/foundation" className="group">
              <h2 className="text-3xl font-extralight tracking-widest text-zinc-400 transition-colors group-hover:text-white uppercase">
                Foundation
              </h2>
            </Link>
          </div>

          <div className="mt-32 max-w-2xl text-center">
            <p className="text-lg font-extralight tracking-widest text-zinc-400 italic leading-relaxed">
              &quot;F. R. Zulfikar adalah seorang anak laki-laki yang ingin menciptakan landscape terindah di dunia.&quot;
            </p>

            <div className="mt-12 flex items-center justify-center gap-6 text-zinc-600">
              <span className="text-sm tracking-widest uppercase">F. R. Zulfikar</span>
              <div className="h-[1px] w-24 bg-zinc-800"></div>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}