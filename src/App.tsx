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

// Local images for the executive team
import shahdImage from './assets/team/shahd-saeed.png';
import vishwkumarImage from './assets/team/vishwkumar-sheta.png';
import meetImage from './assets/team/meet-patel.png';
import siddharthImage from './assets/team/siddharth-modi.png';
// Note: Add an image for Muhammad in 'assets/team' and uncomment the line below
// import muhammadImage from './assets/team/muhammad-azeem.png'; 
import eriminuoluwaImage from './assets/team/Eriminuoluwa-Orolugbagbe.png';
import anasImage from './assets/team/anas-munshi.png';


const App: React.FC = () => {

  // This hook fixes the scroll restoration issue.
  useEffect(() => {
    // Disable the browser's automatic scroll restoration.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // Always scroll to the top of the page on initial load.
    window.scrollTo(0, 0);
  }, []); // The empty array ensures this runs only once on mount.


  // Data for new sections
  const events = [
    {
      date: { day: '10', month: 'Sep' },
      title: 'CSSS Welcome Back BBQ',
      time: '12:00 PM - 2:00 PM',
      description: 'Join us for free food and meet fellow CS students to kick off the new semester!',
    },
    {
      date: { day: '25', month: 'Sep' },
      title: 'Resume & Interview Workshop',
      time: '5:00 PM - 7:00 PM',
      description: 'Get career-ready with tips from industry professionals on building the perfect tech resume.',
    },
    {
      date: { day: '10', month: 'Oct' },
      title: 'URHacks Kick-off',
      time: '6:00 PM - 7:00 PM',
      description: 'The official start of our 24-hour hackathon. Theme reveal, rules, and more!',
    }
  ];

  const team = [
    { name: 'Shahd Saeed', title: 'President', imageUrl: shahdImage },
    { name: 'Vishwkumar Sheta', title: 'VP Internal', imageUrl: vishwkumarImage },
    { name: 'Meet Patel', title: 'VP External', imageUrl: meetImage },
    { name: 'Siddharth Modi', title: 'Financial Officer', imageUrl: siddharthImage },
    { name: 'Muhammad Muiz Azeem', title: 'Facilities Officer', imageUrl: 'https://via.placeholder.com/192/E2E8F0/4A5568?text=Photo' }, // Placeholder - update when image is available
    { name: 'Eriminuoluwa Orulugbagbe', title: 'Social Media Manager', imageUrl: eriminuoluwaImage },
    { name: 'Anas Munshi', title: 'Events Manager', imageUrl: anasImage },
  ];

  // Data for URHacks section
  const sponsorshipTiers = [
    {
      tier: 'Bronze Tier',
      price: '$500 CAD',
      benefits: [
        'Logo on event website.',
        'Mention in opening and closing ceremony slides.',
        'Opportunity to provide company swag items to be distributed at the event.',
      ],
    },
    {
      tier: 'Silver Tier',
      price: '$1000 CAD',
      benefits: [
        'All bronze tier benefits, plus:',
        'Medium sized logo on all promotional material and staff t-shirts.',
        'Message in the event program & a social media post highlighting your sponsorship.',
        'One (1) company representative as a hackathon judge.',
        'Opportunity to set up a promotional table at the venue.',
        'Option to run a workshop or seminar during the event.',
      ],
    },
    {
      tier: 'Gold Tier',
      price: '$2500 CAD',
      benefits: [
        'All silver tier benefits, plus:',
        'Premium logo (largest size) on promotional material, lanyards, and staff t-shirts.',
        '5-minute speaking opportunity during the opening ceremony.',
        'Two (2) company representatives as a hackathon judges.',
        'URHacks volunteers to distribute company brochures.',
        'Featured inclusion in pre-event media release as a prime partner.',
      ],
      isFeatured: true,
    },
  ];

  const winners = [
    {
      prize: '1st Place Winner ($1000)',
      title: 'SolarGreen',
      subtitle: 'Transforming Rooftops into Sustainable Revenue Streams',
      description: 'A 2-person team created a web application that utilizes satellite imaging technology to scan rooftops and run an energy cost comparison to see how much money and CO2 reduction would be saved long term through solar panel installation.'
    },
    {
      prize: 'Runner-up Winner ($500)',
      title: 'Future Feast',
      subtitle: 'Don’t Waste the Ingredients',
      description: 'A 4-person team created a mobile application that connects users to sell and buy groceries from one another that they don’t plan to use or will soon expire, reducing food waste and tackling hunger.'
    },
    {
      prize: 'People’s Choice Winner ($200)',
      title: 'BinBuddy',
      subtitle: 'AI-Powered Waste Sorting',
      description: 'A 3-person team created a mechanical 3-sectioned trash bin that uses AI cameras powered by Google Gemini to automatically sort trash, making recycling easy and effortless.'
    }
  ];

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
              <p className="text-lg">The first URHacks event was an incredible success with over 60+ participants who built solutions themed on the UN’s 17 Goals of Sustainability.</p>
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