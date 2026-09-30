import InitiativeHeader from "@/components/initiative-header";
import FadeUp from "@/components/fade-up";
import AccentText from "@/components/accent-text";
import ImageCarousel from "@/components/image-carousel";
import Footer from "@/components/footer";

const CONCEPT_ITEMS = Array.from({ length: 5 }, (_, i) => ({
    alt: `F. R. Concept ${i + 1}`,
}));

export default function InitiativeArchitectureConceptPage() {
    return (
        <>
            <main className="relative z-10 mb-[40vh] md:mb-[50vh] w-full bg-[#F8F8F8] font-sans text-black antialiased">
                <InitiativeHeader activeCategory="Architecture Concept" showBack />

                {/* HERO — placeholder, gambar referensi asli berhak cipta (signed watercolor), belum bisa dipakai */}
                <section className="relative h-screen w-full overflow-hidden bg-zinc-300 pt-24" />

                {/* Heading & description */}
                <section className="px-6 md:px-16 lg:px-[8.5%] py-16 max-w-3xl">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-8">
                            Architecture and the <AccentText>Perpetual Initiatives</AccentText>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="text-zinc-600 leading-relaxed">
                            F. R. Zulfikar mendukung dunia arsitektur melalui berbagai kolaborasi dengan
                            institusi budaya dan seniman terkemuka, sebagai bagian dari komitmen jangka
                            panjang terhadap perkembangan budaya global. Inisiatif ini juga mendorong
                            transfer pengetahuan ke generasi berikutnya lewat beragam program edukasi.
                        </p>
                    </FadeUp>
                </section>

                {/* Large feature photo — placeholder, foto referensi arsitektur berhak cipta studio lain */}
                <section className="px-6 md:px-16 lg:px-[8.5%] pb-16">
                    <FadeUp>
                        <div className="relative w-full aspect-[1450/830] bg-zinc-300" />
                    </FadeUp>
                </section>

                {/* F. R. Concept carousel */}
                <section className="bg-[#DDE7F2] py-16">
                    <div className="px-6 md:px-16 lg:px-[8.5%] mb-10">
                        <FadeUp>
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
                                F. R. Concept
                            </h2>
                        </FadeUp>
                    </div>
                    <ImageCarousel items={CONCEPT_ITEMS} />
                </section>
            </main>
            <Footer />
        </>
    );
}
