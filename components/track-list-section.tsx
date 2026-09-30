"use client";

import FadeUp from "@/components/fade-up";
import TrackRow from "@/components/track-row";

interface Track {
    coverSrc: string;
    title: string;
    subtitle: string;
    duration: string;
}

interface TrackListSectionProps {
    title: string;
    tracks: Track[];
}

export default function TrackListSection({ title, tracks }: TrackListSectionProps) {
    return (
        <section className="px-6 md:px-16 lg:px-[8.5%] py-16">
            <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-10">
                    {title}
                </h2>
            </FadeUp>
            <div className="flex flex-col divide-y divide-white/5">
                {tracks.map((track, index) => (
                    <FadeUp key={index} delay={index * 0.08}>
                        <TrackRow index={index + 1} {...track} />
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}
