import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { pastTeams } from '../data/pastTeamsData';
import usePageTitle from '../hooks/usePageTitle';

const PastTeamsPage: React.FC = () => {
    usePageTitle('Past Executives');

    return (
        <div className="bg-slate-50 text-gray-800">
            <Header />
            <main className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>Our Legacy: Past Executives</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pastTeams.map((team) => (
                            <div key={team.year} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold text-[#00643f]">{team.year}</h3>
                                    <div className="w-16 h-1 bg-[#fdb927] mt-2"></div>
                                </div>
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