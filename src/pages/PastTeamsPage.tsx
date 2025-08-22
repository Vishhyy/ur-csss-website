import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { pastTeams } from '../data/pastTeamsData';
import SEO from '../components/SEO'; // 1. Import SEO

const PastTeamsPage: React.FC = () => {
    return (
        <div className="bg-slate-50 text-gray-800">
            <SEO
                title="Past Executives"
                description="A legacy of leadership. View the dedicated students who have served on the UofR Computer Science Students' Society executive team throughout the years."
            />

            <Header />
            <main className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>Our Legacy: Past Executives</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastTeams.map((team) => (
                            <div key={team.year} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold text-[#00643f] mb-4 border-b-2 border-[#fdb927] pb-2">{team.year}</h3>
                                <ul className="space-y-2">
                                    {team.members.map((member) => (
                                        <li key={member.name}>
                                            <span className="font-bold">{member.name}</span>
                                            <span className="text-gray-600"> - {member.title}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PastTeamsPage;