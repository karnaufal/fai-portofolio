// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white font-sans text-black antialiased">

            {/* NEW SECTION 1: Cinematic Hero (Video/Full BG) */}
            <section className="relative h-screen w-full snap-start overflow-hidden flex items-center justify-center bg-black">
                <div className="absolute inset-0 z-0">
                    {/* Nanti kalau video udah ada, tinggal ganti tag Image ini jadi <video> */}
                    <Image
                        src="/bg-art-detail.jpg" // Ganti dengan aset SS image_dc70f8.jpg
                        alt="Art of Detail Background"
                        fill
                        className="object-cover opacity-80" // Agak gelap biar teks "Art of Detail" nonjol
                        priority
                    />
                    {/* Autoplay Video Placeholder (Hapus komen ini kalau file video sudah siap)
          <video 
            autoPlay 
            muted 
            loop 
            className="h-full w-full object-cover opacity-70"
          >
            <source src="/about-hero.mp4" type="video/mp4" />
          </video> 
          */}
                </div>

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

                    {/* Judul Utama Center */}
                    <h2 className="text-4xl md:text-6xl font-light italic tracking-tight leading-tight text-zinc-900">
                        Seorang anak yang ingin menciptakan landscape terindah di dunia.
                    </h2>

                    {/* Garis pemisah tipis biar makin estetik (Optional, tapi cakep) */}
                    <div className="h-[1px] w-20 bg-zinc-200"></div>

                    {/* Isi Konten Center */}
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

            {/* SECTION 3: The Zigzag Grid Gallery (Bentley & Portraits) */}
            <section className="relative h-screen w-full snap-start bg-[#F5F5F5] p-10 md:p-20 flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 h-full max-w-7xl pt-20">
                    <div className="relative h-[60vh] md:h-[70vh] md:col-span-1">
                        <div className="relative h-full w-full bg-zinc-200 shadow-md">
                            <Image src="/bentley-detail.jpg" alt="Detail Bentley" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="relative h-[60vh] md:h-[70vh] md:col-span-1 md:translate-y-32">
                        <div className="relative h-full w-full bg-zinc-200 shadow-md">
                            <Image src="/portrait-close.jpg" alt="F.R. Zulfikar Portrait Close-up" fill className="object-cover grayscale" />
                        </div>
                    </div>

                    <div className="relative h-[60vh] md:h-[70vh] md:col-span-1 md:translate-y-64">
                        <div className="relative h-full w-full bg-zinc-200 shadow-md">
                            <Image src="/portrait-sofa.jpg" alt="F.R. Zulfikar on Sofa" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Bio & Philosophy (image_13.png) */}
            {/* Kembali ke background putih, snap-start biar presisi */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center bg-white p-10 md:p-24 overflow-hidden">
                {/* Angka '1998' Raksasa di Background (image_13.png) */}
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 text-[25rem] font-black text-zinc-50 select-none opacity-60 z-0">
                    1998
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center max-w-7xl">
                    {/* Teks Bio Panjang */}
                    <div className="space-y-10 text-xl font-light leading-relaxed text-zinc-800">
                        <p>Banyak orang beranggapan mimpinya... omong kosong.</p>
                        <p className="text-sm tracking-widest uppercase text-black font-medium">Lahir di Bandung pada 8 April 1998</p>
                    </div>

                    {/* Tanda Tangan & Jabatan */}
                    <div className="flex flex-col items-center md:items-end text-right space-y-4 mt-20 md:mt-0">
                        <Image src="/signature.png" alt="Signature" width={200} height={80} className="grayscale opacity-80" />
                        <div className="h-[1px] w-32 bg-black opacity-20 mt-4"></div>
                        <p className="text-xl font-medium tracking-wide">F. R. Zulfikar</p>
                        <p className="text-sm text-zinc-500 tracking-wider">Chairman, Omaira Limited</p>
                    </div>
                </div>
            </section>

            {/* SECTION 4: SCROLL HIDDEN FOOTER (image_14.png) */}
            {/* Ini efek "Discover" yang lu mau jir. Dia pake background image dan fixed positioning */}
            <section className="relative h-[80vh] w-full snap-start overflow-hidden flex items-center justify-center p-10 text-center">

                {/* Background Image Fixed (buat efek scroll hidden/parallax) */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/bg-perpetual.jpg" // Ganti dengan hasil export image_14.png (orange)
                        alt="Perpetual Initiatives Background"
                        fill
                        className="object-cover fixed top-0" // Kunci efek scroll hidden ada di 'fixed'
                        style={{ transform: 'translateZ(-1px)' }} // Buat efek kedalaman
                    />
                    {/* Overlay gelap minimalis */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Konten Teks di Atas Background */}
                <div className="relative z-10 space-y-6">
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl">
                        Discover our Perpetual Initiatives
                    </h2>
                    <a href="#" className="inline-block text-white/80 hover:text-white text-lg tracking-widest font-light mt-6 group">
                        Visit discoveryomaira.com <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </a>
                </div>
            </section>

        </main>
    );
}