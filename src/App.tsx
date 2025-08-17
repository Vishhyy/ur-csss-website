import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import SponsorshipCard from './components/SponsorshipCard';
import WinnerCard from './components/WinnerCard';
import Footer from './components/Footer';
import ChevronRightIcon from './components/ChevronRightIcon';
import EventCard from './components/EventCard';
import TeamMemberCard from './components/TeamMemberCard';
import Chatbot from './components/Chatbot';
import ProjectIdeaGenerator from './components/ProjectIdeaGenerator';

// --- IMPORT YOUR DATA FROM THE NEW FILES ---
import { events } from './data/eventsData';
import { team } from './data/teamData';
import { sponsorshipTiers } from './data/sponsorshipData';
import { winners } from './data/winnersData';


const App: React.FC = () => {

  // This hook fixes the scroll restoration issue.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);


  return (
    <div className="bg-slate-50 text-gray-800">
      <Header />
      <main>
        <Hero />

        <section id="about" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Growing and Learning Together</SectionTitle>
            <p className="text-lg max-w-4xl mx-auto">
              The Computer Science Students’ Society is a student-managed organization composed of computer science students from all years and specializations at the University of Regina. For over 30 years, we have worked diligently to provide opportunities for the UofR’s tech enthusiasts by bringing challenging events, networking opportunities, career seminars, and programming workshops right to their doorstep.
            </p>
          </div>
        </section>

        <section id="events" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Campus Events</SectionTitle>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map(event => <EventCard key={event.title} {...event} />)}
            </div>
          </div>
        </section>

        <section id="team" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionTitle>Meet Your Executive Team</SectionTitle>
            <p className="text-lg max-w-4xl mx-auto mb-16">Congratulations to our newly elected 2025-2026 Executive Team! This passionate group of students is dedicated to building a strong and inclusive tech community on campus.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-center">
              {team.map(member => <TeamMemberCard key={member.name} {...member} />)}
            </div>
            <p className="mt-16 text-md text-gray-700 italic">
              The Assistance and Information Officer position will be voted on in Fall 2025. Stay tuned for details!
            </p>
          </div>
        </section>

        <section id="urhacks" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>URHacks: Our Premier Hackathon</SectionTitle>

            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-[#00643f] mb-4">What is URHacks?</h3>
              <p className="text-lg mb-4">URHacks is our flagship event, a multi-day competition that brings together programmers and team members to build an application and solve a problem within a 24-hour time constraint. It’s an opportunity to apply in-class knowledge in a practical, collaborative environment, and present a product to a panel of judges for a chance to win cash prizes.</p>
              <p className="text-lg">The first URHacks event was an incredible success with over 60+ participants who.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-12">
              <ProjectIdeaGenerator />
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-[#00643f] text-center mb-12">Highlights from Our First Event</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {winners.map(winner => <WinnerCard key={winner.title} {...winner} />)}
              </div>
            </div>

            <div className="mt-20">
              <h3 className="text-3xl font-bold text-[#00643f] text-center mb-12">Sponsor URHacks 2025</h3>
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
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;