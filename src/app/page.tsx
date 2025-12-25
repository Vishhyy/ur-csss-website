import Hero from "@/components/Hero";
import EventCard from "@/components/EventCard";
import TeamMemberCard from "@/components/TeamMemberCard";
import SponsorsShowcase from "@/components/SponsorsShowcase";
import SectionTitle from "@/components/SectionTitle";

// Imports from data folder
import { events } from "@/data/eventsData";
import { team } from "@/data/teamData";
import { generalSponsors } from "@/data/sponsorsData";

export default function Home() {
    return (
        <main>
            <Hero />

            {/* About Section */}
            <section id="about" className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <SectionTitle>Growing and Learning Together</SectionTitle>
                    <p className="text-lg max-w-4xl mx-auto mt-8">
                        The Computer Science Students’ Society is a student-managed organization composed of computer science students from all years and specializations at the University of Regina. For over 30 years, we have worked diligently to provide opportunities for the UofR’s tech enthusiasts by bringing challenging events, networking opportunities, career seminars, and programming workshops right to their doorstep.
                    </p>
                </div>
            </section>

            {/* Events Section */}
            <section id="events" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SectionTitle>Campus Events</SectionTitle>
                    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                        {events.map((event, index) => <EventCard key={index} {...event} />)}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <SectionTitle>Meet Your Executive Team</SectionTitle>
                    <p className="text-lg mb-12">Congratulations to our newly elected 2025-2026 Executive Team!</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center">
                        {team.map((member, i) => <TeamMemberCard key={i} {...member} />)}
                    </div>

                    <p className="mt-16 text-gray-600 italic">
                        The Assistance and Information Officer position will be voted on in Fall 2025.
                    </p>
                </div>
            </section>

            {/* Sponsors Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <SponsorsShowcase sponsors={generalSponsors} showStripes={false} />
                </div>
            </section>
        </main>
    );
}