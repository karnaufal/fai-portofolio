"use client";

import FadeUp from "@/components/fade-up";
import ContentCard from "@/components/content-card";

interface GridItem {
    coverSrc?: string;
    alt: string;
}

interface ContentGridSectionProps {
    title: string;
    items: GridItem[];
    ctaLabel?: string;
}

export default function ContentGridSection({ title, items, ctaLabel }: ContentGridSectionProps) {
    return (
        <section className="px-6 md:px-16 lg:px-[8.5%] py-10">
            <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-10">
                    {title}
                </h2>
            </FadeUp>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {items.map((item, index) => (
                    <FadeUp key={index} delay={index * 0.1}>
                        <ContentCard coverSrc={item.coverSrc} alt={item.alt} ctaLabel={ctaLabel} />
                    </FadeUp>
                ))}
            </div>
        </section>
    );
}
