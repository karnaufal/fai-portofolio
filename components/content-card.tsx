"use client";

import Image from "next/image";

interface ContentCardProps {
    coverSrc?: string;
    alt: string;
    ctaLabel?: string;
}

export default function ContentCard({ coverSrc, alt, ctaLabel = "Baca Secara Online" }: ContentCardProps) {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative w-full aspect-[329/495] bg-[#D9D9D9] overflow-hidden">
                {coverSrc && (
                    <Image
                        src={coverSrc}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 45vw, 20vw"
                        className="object-cover"
                    />
                )}
            </div>
            <button
                type="button"
                className="w-[79%] h-12 rounded-full bg-[#262626] text-white text-[10px] font-semibold tracking-[0.15em] uppercase hover:bg-black transition-colors"
            >
                {ctaLabel}
            </button>
        </div>
    );
}
