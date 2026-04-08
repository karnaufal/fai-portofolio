// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white font-sans text-black antialiased">

            {/* SECTION 1: Cinematic Hero */}
            <section className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center bg-black">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-art-detail.png" // Sudah sinkron ke PNG
                        alt="Art of Detail Background"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                </div>

                {/* Tambahin z-10 biar teks gak ketutup overlay */}
                <div className="relative z-10 text-center">
                    <h1 className="text-6xl md:text-9xl font-extralight tracking-[0.2em] text-white uppercase mix-blend-difference">
                        Art of Detail
                    </h1>
                    <div className="mt-8 h-[1px] w-24 bg-white/40 mx-auto"></div>
                </div>
            </section>

            {/* SECTION 2: Editorial Portrait Intro */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center bg-white p-10 md:p-24 overflow-hidden">
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

            {/* SECTION 3: Standard Grid Gallery with Gentle Offset (Muncul & Estetik) */}
            <section className="relative min-h-screen w-full snap-start bg-[#F5F5F5] p-10 md:p-24 flex flex-col items-center justify-center">

                <div className="w-full max-w-7xl mb-12 text-left">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-bold">Captured Moments</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-7xl items-start">

                    {/* Card 1: Bentley (Normal) */}
                    <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-200 shadow-sm transition-all duration-500">
                        <Image
                            src="/person-1.png"
                            alt="Detail"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    {/* Card 2: Portrait (Grayscale - Kasih offset dikit aja) */}
                    <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-200 shadow-sm transition-all duration-500 md:mt-12">
                        <Image
                            src="/person-2.png"
                            alt="Portrait"
                            fill
                            className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                    {/* Card 3: Sofa (Offset lebih banyak dikit) */}
                    <div className="group relative aspect-[3/4] overflow-hidden bg-zinc-200 shadow-sm transition-all duration-500 md:mt-24">
                        <Image
                            src="/person-3.png"
                            alt="Lifestyle"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                    </div>

                </div>
            </section>

            {/* SECTION 4: Bio & Philosophy dengan Footer Legal */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center bg-white p-10 md:px-24 md:pb-8 md:pt-24 overflow-hidden">
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-[20rem] md:text-[25rem] font-black text-zinc-50 select-none z-0">
                    1998
                </div>

                <div className="relative z-10 flex flex-col h-full w-full max-w-7xl">
                    <div className="mt-auto max-w-3xl space-y-8 text-lg md:text-xl font-light leading-relaxed text-zinc-800">
                        <p>
                            Banyak orang beranggapan mimpinya untuk membangun kota ikonik dengan landscape terindah di dunia
                            adalah omong kosong. Namun bagi <span className="font-semibold text-black">F.R. Zulfikar, mimpi mempunyai ruangnya sendiri.</span>
                        </p>
                        <p className="text-sm tracking-[0.3em] uppercase text-zinc-400 font-medium">
                            Lahir di Bandung pada 8 April 1998
                        </p>
                    </div>

                    <div className="self-end flex flex-col items-end text-right space-y-6 mt-12 mb-12 md:mb-16">
                        <div className="max-w-xs space-y-4 italic text-zinc-500 font-light">
                            <p className="text-lg leading-relaxed">
                                &quot;walaupun dia jalannya lambat. Tapi kura-kura pasti akan sampai ke tujuan.&quot;
                            </p>
                            <div className="flex justify-end">
                                <Image src="/signature.png" alt="Signature" width={180} height={60} className="grayscale opacity-90" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="h-[1px] w-48 bg-black/10 mb-4 ml-auto"></div>
                            <p className="text-2xl font-medium tracking-wide text-black">F. R. Zulfikar</p>
                            <p className="text-sm text-zinc-400 tracking-[0.2em] uppercase">Chairman, Omaira Limited</p>
                        </div>
                    </div>

                    {/* FOOTER LEGAL (Sesuai image_e68aeb.png) */}
                    <div className="w-full pt-8 border-t border-zinc-100 mt-auto">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-zinc-400 font-medium pb-4">
                            <div className="flex items-center gap-2 group cursor-pointer">
                                <span className="text-sm">🌐</span>
                                <span className="group-hover:text-black transition-colors">International: English</span>
                            </div>
                            <div className="flex gap-8">
                                <a href="#" className="hover:text-black transition-colors">Terms of use</a>
                                <a href="#" className="hover:text-black transition-colors">Privacy notice</a>
                                <a href="#" className="hover:text-black transition-colors">Cookies</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: DISCOVER FOOTER (Orange Parallax) */}
            <section className="relative h-[80vh] w-full snap-start overflow-hidden flex items-center justify-center p-10 text-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-perpetual.png" // Pastikan file ini ada di public/
                        alt="Perpetual Initiatives Background"
                        fill
                        className="object-cover fixed top-0"
                        style={{ transform: 'translateZ(-1px)' }}
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl">
                        Discover our Perpetual Initiatives
                    </h2>
                    <a href="https://discoveryomaira.com" className="inline-block text-white/80 hover:text-white text-lg tracking-widest font-light mt-6 group">
                        Visit discoveryomaira.com <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </a>
                </div>
            </section>

        </main >
    );
}