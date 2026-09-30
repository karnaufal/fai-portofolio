import InitiativeHeader from "@/components/initiative-header";
import FadeUp from "@/components/fade-up";
import Footer from "@/components/footer";

export default function InitiativeCommunityPage() {
    return (
        <>
            <main className="relative z-10 mb-[40vh] md:mb-[50vh] w-full bg-[#F8F8F8] font-sans text-black antialiased">
                <InitiativeHeader activeCategory="Community" showBack />

                {/* HERO — placeholder, gambar referensi berhak cipta belum bisa dipakai */}
                <section className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden bg-zinc-300 pt-24" />

                {/* Heading & description */}
                <section className="px-6 md:px-16 lg:px-[8.5%] py-16">
                    <div className="grid md:grid-cols-2 gap-10">
                        <FadeUp>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1F6B3A] leading-[1.15]">
                                Menciptakan Kampung Mandiri Berwawasan Masa Depan.
                            </h1>
                        </FadeUp>
                        <div className="space-y-6">
                            <FadeUp delay={0.05}>
                                <p className="font-semibold text-zinc-900 leading-relaxed">
                                    Merayakan kreativitas, mendorong inovasi, dan menginspirasi kolaborasi
                                    lintas komunitas.
                                </p>
                            </FadeUp>
                            <FadeUp delay={0.1}>
                                <p className="text-zinc-600 leading-relaxed">
                                    F. R. Zulfikar mendukung pemberdayaan komunitas melalui program
                                    kolaboratif bersama warga dan pegiat lokal, sebagai bagian dari
                                    komitmen jangka panjang terhadap pembangunan yang berkelanjutan.
                                    Inisiatif ini turut mendorong kemandirian kampung yang berwawasan
                                    masa depan.
                                </p>
                            </FadeUp>
                        </div>
                    </div>
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
