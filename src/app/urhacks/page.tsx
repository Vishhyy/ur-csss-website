import { Metadata } from "next";
import SectionTitle from "@/components/SectionTitle";
import SponsorsShowcase from "@/components/SponsorsShowcase";
import { urhacksSponsors } from "@/data/sponsorsData";
import Image from "next/image";

export const metadata: Metadata = {
    title: "URHacks 2025 | Event Recap",
    description: "A summary of the successful URHacks 2025 hackathon.",
};

export default function URHacksPage() {
    return (
        <>
            <div
                // 1. Changed mobile aspect from [4/5] to [4/6] for slightly more vertical room
                // 2. Added min-h to prevent collapsing on small phones
                className="relative w-full aspect-[4/6] md:aspect-video min-h-[500px] md:min-h-0 bg-cover bg-[center_35%] flex flex-col justify-between"
                style={{ backgroundImage: "url('/hero/urhacks-hero-bg.jpg')" }}
            >
                <div className="absolute inset-x-0 top-0 h-3/5 bg-gradient-to-b from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/90 to-transparent"></div>

                {/* 
           Added 'pt-10' (padding-top) on mobile to push content away from the sticky header.
           Kept alignment 'justify-between' to separate Logo (top) and Date (bottom).
        */}
                <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-between py-12 md:py-16 items-center text-center">

                    <div className="flex flex-col items-center pt-8 md:pt-4 space-y-4">
                        <Image
                            src="/logos/urhacks-2025-logo.png"
                            alt="URHacks 2025 Logo"
                            width={380}
                            height={190}
                            className="drop-shadow-2xl w-[70%] md:w-auto h-auto" // Added explicit width control for mobile
                            priority
                        />
                        <h1 className="text-3xl md:text-6xl font-black tracking-tighter text-white drop-shadow-xl uppercase px-2">
                            Mission Accomplished
                        </h1>
                    </div>

                    <div className="pb-4 md:pb-6 w-full flex justify-center">
                        <div className="inline-block bg-[#fdb927] text-[#00643f] font-bold px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-xl tracking-wider shadow-[0_0_15px_rgba(253,185,39,0.4)] whitespace-nowrap">
                            October 24-25, 2025 • Regina, SK
                        </div>
                    </div>
                </div>
            </div>

            {/* Event Summary Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <SectionTitle>A Look Back</SectionTitle>
                    {/* ... Rest of content remains same ... */}

                    <div className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 space-y-8 text-left md:text-center">
                        <p>
                            <strong className="text-[#00643f] text-xl">URHACKS 2025 is over.</strong> This past weekend, we witnessed an incredible surge of innovation fuelled by caffeine, chaos, and a powerful &quot;we can do it&quot; energy. We are so proud to congratulate our winning teams.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 my-10 text-left">
                            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-3">🥇</div>
                                <h3 className="font-bold text-[#00643f] text-2xl mb-2">First Prize</h3>
                                <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">Team Ablelink</p>
                                <p className="text-base font-medium">Nisarg Dolasiya, Shivam Soni, Keerat Tanwar</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-3">🥈</div>
                                <h3 className="font-bold text-[#00643f] text-2xl mb-2">Second Prize</h3>
                                <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">Team Civic North</p>
                                <p className="text-base font-medium">Brian Mureverwi, David Elumeze</p>
                            </div>
                            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-200 shadow-sm transition-transform hover:-translate-y-1">
                                <div className="text-4xl mb-3">💡</div>
                                <h3 className="font-bold text-[#00643f] text-2xl mb-2">Best Business</h3>
                                <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold mb-1">Team NavigatUR</p>
                                <p className="text-base font-medium">Ishan Soni, Dhruvil Patel, Kanishak Gadhavi, Khush Vadher</p>
                            </div>
                        </div>

                        <div className="bg-slate-50 p-8 rounded-2xl border-l-8 border-[#00643f] text-left shadow-inner">
                            <p className="text-lg text-gray-700">
                                <strong className="block text-[#00643f] mb-2 text-xl">Honorable Mentions</strong>
                                A huge round of applause for all our participants who presented innovative projects including <span className="font-semibold">LensX, Parky, EcoRank, Campus Navigator, Trade My Skill, PotatoDoctor,</span> and <span className="font-semibold">ClinicQ</span>.
                            </p>
                        </div>

                        <p className="font-bold text-[#00643f] text-xl pt-4">
                            We&apos;ll see you all again with more Red Bulls and White Monsters in 2026! 🚀
                        </p>
                        <p className="text-xs text-gray-400 font-mono uppercase tracking-widest">
                            #URHACKS #Hackathon #UofR #Regina
                        </p>
                    </div>
                </div>
            </section>

            {/* Sponsors */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <SponsorsShowcase sponsors={urhacksSponsors} showStripes={true} />
                </div>
            </section>
        </>
    );
}