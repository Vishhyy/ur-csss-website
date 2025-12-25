import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
    title: "UofR CSSS",
    description: "Official hub for the University of Regina Computer Science Students' Society.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            {/* Note: if you haven't moved images yet, standard fonts will simply load */}
            <body className={`${poppins.className} bg-slate-50 text-gray-800`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}