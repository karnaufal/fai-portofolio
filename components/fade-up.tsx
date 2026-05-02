"use client";

import { motion } from "framer-motion";

interface FadeUpProps {
    children: React.ReactNode;
    delay?: number;       // stagger antar elemen, default 0
    duration?: number;    // default 0.7
    className?: string;
}

export default function FadeUp({
    children,
    delay = 0,
    duration = 0.7,
    className,
}: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,   // animasi cukup sekali, nggak repeat tiap masuk viewport
                amount: 0.3,  // trigger saat 30% element keliatan — pas untuk snap scroll
            }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1], // cubic-bezier smooth — luxury feel
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
