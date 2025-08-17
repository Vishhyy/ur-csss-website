import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectIdeaGenerator from '../components/ProjectIdeaGenerator';
import WinnerCard from '../components/WinnerCard';
import SponsorshipCard from '../components/SponsorshipCard';
import ChevronRightIcon from '../components/ChevronRightIcon';
import SponsorsShowcase from '../components/SponsorsShowcase';

// Data imports
import { winners } from '../data/winnersData';
import { sponsorshipTiers } from '../data/sponsorshipData';

const URHacksPage: React.FC = () => {
    return (
        <div className="bg-slate-50 text-gray-800">
            <Header />
            <main>
                {/* --- Section 1: Intro to URHacks (inherits slate background) --- */}
                <section id="urhacks" className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle>URHacks: Our Premier Hackathon</SectionTitle>

                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-3xl font-bold text-[#00643f] mb-4">What is URHacks?</h3>
                            <p className="text-lg mb-4">URHacks is our flagship event, a multi-day competition that brings together programmers and team members to build an application and solve a problem within a 24-hour time constraint. It’s an opportunity to apply in-class knowledge in a practical, collaborative environment, and present a product to a panel of judges for a chance to win cash prizes.</p>
                            <p className="text-lg">The first URHacks event was an incredible success with over 60+ participants who built solutions themed on the UN’s 17 Goals of Sustainability.</p>
                        </div>

                        <div className="max-w-4xl mx-auto mt-12">
                            <ProjectIdeaGenerator />
                        </div>
                    </div>
                </section>

                {/* --- Section 2: Highlights (white background) --- */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle>Highlights from Our First Event</SectionTitle>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {winners.map(winner => <WinnerCard key={winner.title} {...winner} />)}
                        </div>
                    </div>
                </section>

                {/* --- Section 3: Sponsorship (inherits slate background) --- */}
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SectionTitle>Sponsor URHacks 2025</SectionTitle>
                        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                            {sponsorshipTiers.map(tier => <SponsorshipCard key={tier.tier} {...tier} />)}
                        </div>

                        <div className="mt-16 bg-white border-l-4 border-[#fdb927] p-8 rounded-r-lg shadow-sm">
                            <h3 className="text-3xl font-bold text-[#00643f]">Bounty Sponsorship</h3>
                            <p className="text-lg mt-4">A bounty is a special category within a hackathon that tasks competitors with adding a specific feature or using a particular technology. For <span className="font-bold">$200 CAD</span>, your organization can create a custom bounty prize.</p>
                            <p className="mt-2 text-gray-600">Examples: “Best Use of AI for Sustainability”, “Most Accessible Solution”, “Use [company name]’s API in a creative way”.</p>
                            <a href="#contact" className="mt-6 inline-flex items-center font-bold text-[#00643f] hover:underline">
                                Propose a Bounty <ChevronRightIcon />
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- Section 4: Partners (white background) --- */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SponsorsShowcase />
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default URHacksPage;