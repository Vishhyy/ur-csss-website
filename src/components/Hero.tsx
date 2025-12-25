'use client';
import Link from "next/link";

export default function Hero() {
    return (
        <div
            className="relative w-full aspect-[4/5] md:aspect-[21/9] bg-cover bg-[center_top] flex flex-col"
            style={{ backgroundImage: "url('/hero/home-bg.jpg')" }}
        >
            {/* Top Gradient - darker to make the ceiling text pop */}
            <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/80 via-black/30 to-transparent"></div>

            {/* Bottom Gradient - keeps the bottom text readable */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent"></div>

            <div className="relative container mx-auto px-4 h-full flex flex-col justify-between pt-24 pb-10 md:pt-28 md:pb-12 items-center text-center">

                {/* --- TITLE: Full Width & Straight Line --- */}
                <div className="w-full z-10">
                    {/* Changed max-w to w-full so text spreads out. Removed <br> tags. */}
                    <h1 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tighter drop-shadow-2xl">
                        Welcome to the{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fdb927] via-[#ffe59e] to-[#fdb927]">
                            Computer Science
                        </span>{' '}
                        Students&apos; Society!
                    </h1>
                </div>

                {/* --- BUTTON: Stays low --- */}
                <div className="max-w-2xl z-10 flex flex-col items-center">
                    {/* Mobile-only descriptive text for context, hidden on desktop to keep it clean */}
                    <p className="md:hidden text-sm text-gray-200 font-light mb-6 tracking-wide drop-shadow-md">
                        Your hub for events, resources, and community at the University of Regina.
                    </p>

                    {/* Desktop description text - optional, can be hidden if you want pure minimalism */}
                    <p className="hidden md:block text-lg text-gray-200 font-light mb-6 tracking-wide drop-shadow-md">
                        Your hub for events, resources, and community at the University of Regina.
                    </p>

                    <Link
                        href="/#events"
                        className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-3 px-8 text-sm tracking-widest uppercase rounded-full hover:bg-[#ffcd57] hover:scale-105 transition-all shadow-[0_0_20px_rgba(253,185,39,0.3)]"
                    >
                        Explore Our Events
                    </Link>
                </div>

            </div>
        </div>
    );
}