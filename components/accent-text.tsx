interface AccentTextProps {
    children: React.ReactNode;
}

export default function AccentText({ children }: AccentTextProps) {
    return (
        <span className="bg-gradient-to-r from-[#8B6F47] to-[#3D2E1F] bg-clip-text text-transparent">
            {children}
        </span>
    );
}
