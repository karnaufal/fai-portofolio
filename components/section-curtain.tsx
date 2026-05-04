"use client";

import { motion } from "framer-motion";

interface SectionCurtainProps {
    children: React.ReactNode;
    className?: string;
    curtainColor?: string; // default hitam
    duration?: number;     // durasi tirai naik, default 1.2s
    delay?: number;        // delay sebelum tirai mulai naik, default 0.1s
}

export default function SectionCurtain({
    children,
    className,
    curtainColor = "#000000",
    duration = 1.2,
    delay = 0.1,
}: SectionCurtainProps) {
    return (
        // Wrapper harus relative + overflow-hidden biar curtain nggak keluar frame
        <div className={`relative overflow-hidden ${className ?? ""}`}>

            {/* Konten di balik tirai */}
            {children}

            {/* THE CURTAIN — tirai hitam yang slide ke atas saat section masuk viewport */}
            <motion.div
                initial={{ y: "0%" }}         // mulai nutupin penuh
                whileInView={{ y: "-100%" }}  // slide ke atas, reveal konten
                viewport={{
                    once: true,    // cukup sekali
                    amount: 0.3,   // trigger saat 30% section keliatan
                }}
                transition={{
                    duration,
                    delay,
                    ease: [0.76, 0, 0.24, 1], // cubic-bezier yang berat + dramatis — Pagani feel
                }}
                style={{ backgroundColor: curtainColor }}
                className="absolute inset-0 z-20 origin-bottom"
            />

        </div>
    );
}
