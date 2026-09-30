"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface TrackRowProps {
    index: number;
    coverSrc: string;
    title: string;
    subtitle: string;
    duration: string;
}

export default function TrackRow({ index, coverSrc, title, subtitle, duration }: TrackRowProps) {
    return (
        <div className="group flex items-center gap-4 md:gap-6 px-4 md:px-6 py-4 rounded-xl transition-colors hover:bg-[#2A2A2A] cursor-pointer">
            <div className="w-6 shrink-0 flex items-center justify-center text-white/60 text-sm">
                <span className="group-hover:hidden">{index}</span>
                <Play size={14} fill="white" className="hidden group-hover:block" />
            </div>
            <div className="relative w-[56px] h-[56px] md:w-[72px] md:h-[72px] shrink-0 overflow-hidden">
                <Image src={coverSrc} alt={title} fill sizes="72px" className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white font-semibold truncate">{title}</p>
            </div>
            <div className="hidden md:block w-32 text-white/50 text-sm">{subtitle}</div>
            <div className="w-14 text-right text-white/50 text-sm">{duration}</div>
        </div>
    );
}
