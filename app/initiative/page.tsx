import Image from "next/image";

export default function InitiativePage() {
    return (
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-white font-sans text-black antialiased">

            {/* HEADER NAVIGATION (image_42e500.jpg) */}
            <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
                {/* Top Row: Menu & Logo */}
                <div className="flex items-center justify-between px-10 py-6 border-b border-zinc-100">
                    <span className="text-xs tracking-[0.3em] uppercase font-medium">Menu</span>
                    <div className="flex items-center justify-center border border-black rounded-full px-8 py-1">
                        <span className="font-bold text-lg italic">F</span>
                    </div>
                    <div className="w-10"></div> {/* Spacer */}
                </div>

                {/* Sub-Nav Row: Categories */}
                <nav className="flex items-center justify-between px-10 py-4 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                    <span className="text-black font-semibold italic">Initiative</span>
                    <div className="flex gap-10">
                        <button className="hover:text-black transition-colors">Book</button>
                        <button className="hover:text-black transition-colors">Music</button>
                        <button className="hover:text-black transition-colors">Short</button>
                        <button className="hover:text-black transition-colors">Concept Architecture</button>
                    </div>
                </nav>
            </header>

            {/* SECTION 1: Hero Initiative (image_42e500.jpg) */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center pt-24">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 z-0">
                    <div className="h-full w-full bg-zinc-900">
                        {/* <Image src="/bg-initiative.jpg" fill className="object-cover opacity-60" alt="Initiative Background" /> */}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                </div>

                {/* Title Content */}
                <div className="relative z-10 text-center">
                    <h1 className="text-7xl md:text-[10rem] font-light tracking-[0.2em] text-white uppercase opacity-90">
                        Initiative
                    </h1>
                    {/* Garis Vertikal Indikator Scroll */}
                    <div className="absolute left-1/2 -bottom-40 h-24 w-[1px] bg-white/50 -translate-x-1/2"></div>
                </div>
            </section>

            {/* SECTION 2: Next Content (Coming Soon) */}
            <section className="relative flex h-screen w-full snap-start items-center justify-center bg-zinc-50">
                <p className="text-zinc-400 tracking-widest uppercase italic">Project Details Coming Soon</p>
            </section>

        </main>
    );
}