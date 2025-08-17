import React from 'react';
import { sponsors } from '../data/ourSponsorsData';
import SectionTitle from './SectionTitle';

const SponsorsShowcase: React.FC = () => {
    if (sponsors.length === 0) {
        return null;
    }

    return (
        <div className="text-center">
            <SectionTitle>Our Valued Partners</SectionTitle>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Our events are made possible by the generous support of our sponsors. Interested in seeing your logo here? Get in touch!</p>

            {/* Gold Tier Sponsors */}
            <div className="flex justify-center items-center flex-wrap gap-8 mb-8">
                {sponsors.filter(s => s.tier === 'Gold').map((sponsor, index) => (
                    <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-24 object-contain" />
                    </a>
                ))}
            </div>

            {/* Silver Tier Sponsors */}
            <div className="flex justify-center items-center flex-wrap gap-8 mb-8">
                {sponsors.filter(s => s.tier === 'Silver').map((sponsor, index) => (
                    <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-20 object-contain" />
                    </a>
                ))}
            </div>

            {/* Bronze Tier Sponsors */}
            <div className="flex justify-center items-center flex-wrap gap-8">
                {sponsors.filter(s => s.tier === 'Bronze').map((sponsor, index) => (
                    <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                        <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-16 object-contain" />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default SponsorsShowcase;