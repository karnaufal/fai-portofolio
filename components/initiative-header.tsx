"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

const CATEGORIES = [
    { name: "About", href: undefined },
    { name: "Book", href: "/initiative/book" },
    { name: "Music", href: "/initiative/music" },
    { name: "Architecture Concept", href: "/initiative/architecture-concept" },
    { name: "Science and Health", href: "/initiative/science-and-health" },
    { name: "Community", href: undefined },
    { name: "Contemporary Dance Art", href: undefined },
    { name: "Videos", href: undefined },
] as const;

interface InitiativeHeaderProps {
    activeCategory?: (typeof CATEGORIES)[number]["name"];
    showBack?: boolean;
}

export default function InitiativeHeader({ activeCategory, showBack = false }: InitiativeHeaderProps) {
    return (
        <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
            {/* Top Row: Menu, Logo, Search */}
            <div className="flex items-center justify-between px-10 py-6 border-b border-zinc-100">
                <span className="text-xs tracking-[0.3em] uppercase font-medium">Menu</span>
                <Image
                    src="/signature-fr-white.png"
                    alt="FR Logo"
                    width={60}
                    height={30}
                    className="object-contain opacity-90 h-[22px] w-auto brightness-0"
                    priority
                />
                <div className="flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-medium cursor-pointer group">
                    <span className="group-hover:opacity-70 transition-opacity">Search</span>
                    <Search size={16} className="stroke-1" />
                </div>
            </div>

            {/* Sub-Nav Row: Categories */}
            <nav className="flex items-center justify-between px-10 py-4 text-[10px] tracking-[0.2em] uppercase text-zinc-500">
                <div className="flex items-center gap-3">
                    {showBack && (
                        <Link href="/initiative" aria-label="Back to Initiative" className="hover:opacity-60 transition-opacity">
                            ←
                        </Link>
                    )}
                    <span className="text-black font-semibold italic">Initiative</span>
                </div>
                <div className="flex gap-10">
                    {CATEGORIES.map((category) => {
                        const isActive = category.name === activeCategory;
                        const className = `transition-colors ${isActive ? "text-black font-semibold underline underline-offset-4" : "hover:text-black"
                            }`;
                        return category.href ? (
                            <Link key={category.name} href={category.href} className={className}>
                                {category.name}
                            </Link>
                        ) : (
                            <button key={category.name} className={className}>
                                {category.name}
                            </button>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}
