import Image from "next/image";
import InitiativeHeader from "@/components/initiative-header";
import TrackListSection from "@/components/track-list-section";
import Footer from "@/components/footer";

const TRACKS = Array.from({ length: 5 }, (_, i) => ({
    coverSrc: `/music-track-${i + 1}.png`,
    title: "Mencari Bintang Jatuh",
    subtitle: "OST",
    duration: "3:14",
}));

export default function InitiativeMusicPage() {
    return (
        <>
            <main className="relative z-10 mb-[40vh] md:mb-[50vh] w-full bg-gradient-to-br from-[#1B160F] via-[#2C2B28] to-[#686767] font-sans text-white antialiased">
                <InitiativeHeader activeCategory="Music" showBack />

                {/* HERO */}
                <section className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden pt-24">
                    <Image
                        src="/initiative-music-hero.png"
                        alt="Music Initiative"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                </section>

                <TrackListSection title="Music Sound Track" tracks={TRACKS} />
            </main>
            <Footer />
        </>
    );
}
