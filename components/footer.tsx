import Image from "next/image";

export default function Footer() {
    return (
        /*
            REVEAL FOOTER TECHNIQUE:
            - fixed bottom-0: footer diam di background, nggak ikut scroll
            - z-0: di belakang main content
            - h-[40vh] md:h-[50vh]: tinggi footer = nilai yang dipake sebagai mb di layout wrapper
        */
        <footer className="fixed bottom-0 left-0 right-0 z-0 h-[40vh] md:h-[50vh] w-full overflow-hidden flex items-center justify-center text-center">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-perpetual.png"
                    alt="Perpetual Initiatives Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center space-y-8 px-8">
                <h2 className="text-xl md:text-5xl font-semibold tracking-tight text-white text-center leading-relaxed">
                    Discover our Perpetual Initiatives
                </h2>

                <a
                    href="https://discoveryomaira.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-row items-center justify-center gap-x-3 text-white/90 hover:text-white transition-all group"
                >
                    <span className="text-[11px] md:text-base font-semibold tracking-[0.1em] border-b border-transparent group-hover:border-white/50 pb-1 transition-all">
                        Visit discoveryomaira.com
                    </span>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                </a>
            </div>

        </footer>
    );
}
