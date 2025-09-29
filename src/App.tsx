import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionTitle from './components/SectionTitle';
import Footer from './components/Footer';
import EventCard from './components/EventCard';
import TeamMemberCard from './components/TeamMemberCard';
import Chatbot from './components/Chatbot';
import SponsorsShowcase from './components/SponsorsShowcase';
import usePageTitle from './hooks/usePageTitle';

import { events } from './data/eventsData';
import { team } from './data/teamData';
import { sponsors as generalSponsors } from './data/generalSponsorsData';

const App: React.FC = () => {
  usePageTitle('Home');

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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle>Meet Your Executive Team</SectionTitle>
            <p className="text-lg max-w-4xl mx-auto mb-16 text-center">Congratulations to our newly elected 2025-2026 Executive Team! This passionate group of students is dedicated to building a strong and inclusive tech community on campus.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16 justify-center">
              {team.map(member => <TeamMemberCard key={member.name} {...member} />)}
            </div>
            <p className="mt-16 text-md text-gray-700 italic text-center">
              The Assistance and Information Officer position will be voted on in Fall 2025. Stay tuned for details!
            </p>
          </div>
        </section>
        <section id="sponsors" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SponsorsShowcase sponsors={generalSponsors} showStripes={false} />
          </div>
        </section>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

export default App;