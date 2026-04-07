import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white font-sans text-black antialiased">

            {/* SECTION 1: Intro Quote (image_426a3b.png) */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center p-10 md:p-24">
                <div className="max-w-4xl text-center">
                    <h2 className="text-4xl md:text-6xl font-light italic tracking-tight leading-snug">
                        Seorang anak yang ingin menciptakan landscape terindah di dunia.
                    </h2>
                    <p className="mt-12 text-zinc-500 text-lg md:text-xl leading-relaxed font-light">
                        &quot;Saya meyakini bahwa saat saya membidikkan busur visioner ke arah bintang...
                        saya sedang membawa sebuah sumber ideal yang misterius.&quot;
                    </p>
                    <p className="mt-8 text-sm tracking-[0.3em] uppercase font-medium">
                        — F. R. Zulfikar, Principal Indonesia.
                    </p>
                </div>
                {/* Dekorasi gambar di pojok kanan bawah seperti di SS */}
                <div className="absolute bottom-0 right-0 w-1/3 h-1/3 opacity-80 hidden md:block">
                    <div className="relative w-full h-full bg-zinc-100">
                        {/* <Image src="/about-corner.jpg" fill className="object-cover" alt="Detail" /> */}
                    </div>
                </div>
            </section>

            {/* SECTION 2: Portrait Gallery (image_426ce5.jpg / image_426d02.jpg) */}
            <section className="relative h-screen w-full snap-start overflow-hidden bg-white px-6 py-12 md:px-24">
                <div className="grid h-full grid-cols-12 gap-4">
                    {/* Foto Utama (Kiri Besar) */}
                    <div className="relative col-span-12 md:col-span-7 h-[60vh] md:h-full">
                        <div className="relative h-full w-full bg-zinc-200">
                            {/* <Image src="/portrait-1.jpg" fill className="object-cover grayscale" alt="F.R. Zulfikar Portrait" /> */}
                        </div>
                    </div>

                    {/* Foto Samping (Kanan Atas & Bawah) */}
                    <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                        <div className="relative h-1/2 w-full bg-zinc-200">
                            {/* <Image src="/bentley-detail.jpg" fill className="object-cover" alt="Detail" /> */}
                        </div>
                        <div className="relative h-1/2 w-full bg-zinc-200">
                            {/* <Image src="/portrait-2.jpg" fill className="object-cover grayscale" alt="Action" /> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Bio & Philosophy (image_426d41.jpg / image_426d80.jpg) */}
            <section className="relative h-screen w-full snap-start bg-white p-10 md:p-24 overflow-hidden">
                {/* Background Year (Teks Gede 1998) */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[20rem] font-bold text-zinc-100 select-none">
                    1998
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 h-full items-center">
                    {/* Teks Bio */}
                    <div className="space-y-8">
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-zinc-800">
                            Banyak orang beranggapan mimpinya untuk membangun kota ikonik dengan landscape terindah di dunia adalah omong kosong...
                            ia bertekad untuk membuktikan jika mimpi besar bisa lahir dari tempat yang paling bersahaja.
                        </p>
                        <p className="text-zinc-500 tracking-widest uppercase">
                            Lahir di Bandung pada 8 April 1998
                        </p>
                    </div>

                    {/* Filosofi Section (Kura-kura) */}
                    <div className="flex flex-col items-end text-right space-y-6">
                        <span className="text-sm tracking-widest uppercase text-zinc-400">Filosofi</span>
                        <div className="relative w-full h-64 md:w-80 md:h-80 bg-zinc-100 overflow-hidden">
                            {/* <Image src="/philosophy.jpg" fill className="object-cover" alt="Philosophy" /> */}
                        </div>
                        <p className="text-lg italic text-zinc-400 max-w-xs">
                            &quot;walaupun dia jalannya lambat, Tapi kura-kura pasti akan sampai tujuan.&quot;
                        </p>
                        <span className="text-xs text-zinc-400">— F. R. Zulfikar, 2024</span>
                    </div>
                </div>
            </section>

        </main>
    );
}