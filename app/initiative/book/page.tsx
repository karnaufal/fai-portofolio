import Image from "next/image";
import InitiativeHeader from "@/components/initiative-header";
import ContentGridSection from "@/components/content-grid-section";
import Footer from "@/components/footer";

export default function InitiativeBookPage() {
    return (
        <>
            <main className="relative z-10 mb-[40vh] md:mb-[50vh] w-full bg-[#F8F8F8] font-sans text-black antialiased">
                <InitiativeHeader activeCategory="Book" showBack />

                {/* HERO */}
                <section className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden pt-24">
                    <Image
                        src="/initiative-book-hero.png"
                        alt="Book Initiative"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
                </section>

                <ContentGridSection
                    title="Novel"
                    items={[
                        { coverSrc: "/book-cover-paradox.png", alt: "Paradox by Margarita Perez" },
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                    ]}
                />

                <ContentGridSection
                    title="Puisi & Kumpulan Cerita Pendek"
                    items={[
                        { coverSrc: "/book-cover-paradox.png", alt: "Paradox by Margarita Perez" },
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                    ]}
                />

                <ContentGridSection
                    title="Strategi Inovasi Nilai (Value Innovation)"
                    items={[
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                        { alt: "Coming soon" },
                    ]}
                />
            </main>
            <Footer />
        </>
    );
}
