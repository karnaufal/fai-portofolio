"use client";

import Image from "next/image";
import FadeUp from "@/components/fade-up";

interface CarouselItem {
    src?: string;
    alt: string;
}

interface ImageCarouselProps {
    items: CarouselItem[];
}

export default function ImageCarousel({ items }: ImageCarouselProps) {
    return (
        <FadeUp>
            <div className="flex gap-[10px] overflow-x-auto snap-x snap-mandatory pb-2 -mx-6 px-6 md:-mx-16 md:px-16 lg:-mx-[8.5%] lg:px-[8.5%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative shrink-0 w-[260px] md:w-[327px] aspect-[327/260] bg-[#C7D2DE] overflow-hidden snap-start"
                    >
                        {item.src && (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                sizes="327px"
                                className="object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>
        </FadeUp>
    );
}
