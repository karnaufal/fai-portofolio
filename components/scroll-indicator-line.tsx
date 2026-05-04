"use client";

import { motion } from "framer-motion";

export default function ScrollIndicatorLine() {
    return (
        // Fixed bottom-center, z-50 biar di atas semua konten
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center overflow-hidden h-24">

            {/* Track line — background tipis sebagai rel */}
            <div className="w-[1px] h-full bg-white/20" />

            {/* Animated fill — garis yang bergerak ke bawah secara loop */}
            <motion.div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] bg-white origin-top"
                animate={{
                    scaleY: [0, 1, 1, 0],       // tumbuh dari 0 → full → hilang
                    y: ["0%", "0%", "100%", "100%"], // diam → slide down → reset
                    opacity: [0, 1, 1, 0],        // fade in → full → fade out
                }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    times: [0, 0.3, 0.7, 1],    // timing keyframes
                }}
                style={{ height: "96px" }}
            />

        </div>
    );
}
