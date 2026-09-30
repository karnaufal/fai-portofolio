"use client";

import Image from "next/image";
import { Play } from "lucide-react";

interface VideoThumbnailProps {
    src?: string;
    alt: string;
    duration?: string;
    aspectClassName?: string;
}

export default function VideoThumbnail({
    src,
    alt,
    duration,
    aspectClassName = "aspect-video",
}: VideoThumbnailProps) {
    return (
        <div className={`group relative w-full ${aspectClassName} shrink-0 overflow-hidden bg-zinc-700 cursor-pointer`}>
            {src && <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" />}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <Play size={32} fill="white" className="text-white" />
            </div>
            {duration && (
                <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-[11px] text-white">
                    <Play size={10} fill="white" />
                    {duration}
                </div>
            )}
        </div>
    );
}
