import type { Metadata } from "next";
import { patrickHand } from "@/fonts";
import { AppWrapper } from "@/context";

import "./globals.css";

export const metadata: Metadata = {
    title: "The Magic Makers",
    description: "Fundrize collecter for the poor",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth ">
            <AppWrapper>
                <body className={`${patrickHand.className}`}>{children}</body>
            </AppWrapper>
        </html>
    );
}
