"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { RefObject } from "react";
import Image from "next/image";

interface ScrollLogoProps {
    // Pass ref dari snap container (si <main>) biar useScroll baca scroll yang bener
    containerRef: RefObject<HTMLElement>;
}

export default function ScrollLogo({ containerRef }: ScrollLogoProps) {
    const { scrollYProgress } = useScroll({
        container: containerRef, // track scroll dari snap container, bukan window
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
        <motion.div
            style={{ rotate }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-10 h-10 md:w-12 md:h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
            <Image
                src="/signature-FR.png"
                alt="FR Logo"
                fill
                sizes="48px"
                className="object-contain brightness-0 invert"
            />
        </motion.div>
    );
}
