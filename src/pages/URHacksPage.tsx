import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectIdeaGenerator from '../components/ProjectIdeaGenerator';
import SponsorsShowcase from '../components/SponsorsShowcase';
import URHacksHero from '../components/URHacksHero';
import EventSchedule from '../components/EventSchedule';
import PrizePool from '../components/PrizePool';
import usePageTitle from '../hooks/usePageTitle';

import { sponsors as urhacksSponsors } from '../data/urhacksSponsorsData';
import { winners } from '../data/winnersData';
import { sponsorshipTiers } from '../data/sponsorshipData';

const URHacksPage: React.FC = () => {
    usePageTitle('URHacks Hackathon');

    return (
        <div className="bg-slate-50 text-gray-800">
            <Header />
            <main>
                <URHacksHero />
                <section id="details" className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <SectionTitle>What is URHacks?</SectionTitle>
                        </div>
                        <div className="max-w-4xl mx-auto -mt-6 text-center">
                            <p className="text-lg mb-4">A hackathon is an event where participants come together to collaborate and build a project based on the theme, or to solve a problem. The goal is to create this within the short period of time that is given. Participants can choose to work together as a team or individually (although it is recommended to be collaborative). They will present the prototype or the end result of their project to the critics at the end of the event, where it will be judged. The team who impresses the judges the best will receive the winning prize.</p>
                        </div>
                        <div className="max-w-4xl mx-auto mt-12">
                            <ProjectIdeaGenerator />
                        </div>
                    </div>
                </section>
                <PrizePool />
                <section className="py-20">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <SectionTitle>Event Schedule</SectionTitle>
                        </div>
                        <EventSchedule />
                    </div>
                </section>
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <SponsorsShowcase sponsors={urhacksSponsors} showStripes={true} />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default URHacksPage;