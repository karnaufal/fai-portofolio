import InitiativeHeader from "@/components/initiative-header";
import FadeUp from "@/components/fade-up";
import AccentText from "@/components/accent-text";
import Footer from "@/components/footer";

export default function InitiativeContemporaryDanceArtPage() {
    return (
        <>
            <main className="relative z-10 mb-[40vh] md:mb-[50vh] w-full bg-[#F8F8F8] font-sans text-black antialiased">
                <InitiativeHeader activeCategory="Contemporary Dance Art" showBack />

                {/* HERO — placeholder, gambar referensi berhak cipta belum bisa dipakai */}
                <section className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden bg-zinc-300 pt-24" />

                {/* Heading & description */}
                <section className="px-6 md:px-16 lg:px-[8.5%] py-16 max-w-3xl">
                    <FadeUp>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-[1.15] mb-8">
                            Contemporary <AccentText>Dance Art</AccentText>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="text-zinc-600 leading-relaxed">
                            F. R. Zulfikar mendukung dunia seni tari kontemporer melalui kolaborasi dengan
                            koreografer dan komunitas seni pertunjukan terkemuka, sebagai bagian dari
                            komitmen jangka panjang terhadap ekspresi budaya. Inisiatif ini juga mendorong
                            eksplorasi gerak dan ruang sebagai medium bercerita bagi generasi berikutnya.
                        </p>
                    </FadeUp>
                </section>

                {/* Large feature photo — placeholder, foto referensi berhak cipta belum bisa dipakai */}
                <section className="px-6 md:px-16 lg:px-[8.5%] pb-16">
                    <FadeUp>
                        <div className="relative w-full aspect-[1450/830] bg-zinc-300" />
                    </FadeUp>
                </section>
            </main>
            <Footer />
        </>
    );
}
