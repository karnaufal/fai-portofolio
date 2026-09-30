import InitiativeHeader from "@/components/initiative-header";
import FadeUp from "@/components/fade-up";
import VideoThumbnail from "@/components/video-thumbnail";
import Footer from "@/components/footer";

const RELATED_VIDEOS = [
    {
        category: "Omaira Realty | Hospitality",
        title: "Facts about the Sarong Kebaya | JFD",
        duration: "03:42",
    },
    {
        category: "Omaira Realty | Residence",
        title: "Introduction Damayanti Residence | OMAIRA",
        duration: "03:42",
    },
    {
        category: "Omaira Health Care",
        title: "Introduction Lab Artificial Intelligence",
        duration: "03:42",
    },
];

export default function InitiativeVideosPage() {
    return (
        <>
            <main className="relative z-10 mb-[40vh] md:mb-[50vh] w-full bg-[#242424] font-sans text-white antialiased">
                <InitiativeHeader activeCategory="Videos" showBack />

                {/* HERO — placeholder, gambar referensi berhak cipta belum bisa dipakai */}
                <section className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden bg-zinc-700 pt-24" />

                <section className="px-6 md:px-16 lg:px-[8.5%] py-16">
                    <FadeUp>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
                            Featured Video
                        </h2>
                    </FadeUp>

                    <div className="grid lg:grid-cols-[1fr_380px] gap-10">
                        {/* Featured video */}
                        <FadeUp>
                            <div>
                                <VideoThumbnail
                                    alt="Art of Detail | F. R. Zulfikar"
                                    aspectClassName="aspect-[1013/538]"
                                />
                                <p className="mt-4 text-white/90">Art of Detail | F. R. Zulfikar</p>
                            </div>
                        </FadeUp>

                        {/* Related videos */}
                        <div>
                            <FadeUp delay={0.1}>
                                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-6">
                                    <span className="text-white font-semibold">Related</span> Videos
                                </p>
                            </FadeUp>
                            <div className="flex flex-col gap-6">
                                {RELATED_VIDEOS.map((video, index) => (
                                    <FadeUp key={video.title} delay={0.15 + index * 0.08}>
                                        <div className="flex gap-4">
                                            <div className="w-[160px]">
                                                <VideoThumbnail
                                                    alt={video.title}
                                                    duration={video.duration}
                                                    aspectClassName="aspect-[243/135]"
                                                />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-xs text-white/50 mb-1 truncate">
                                                    {video.category}
                                                </p>
                                                <p className="text-sm font-semibold leading-snug">
                                                    {video.title}
                                                </p>
                                            </div>
                                        </div>
                                    </FadeUp>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
