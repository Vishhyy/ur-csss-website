import React from 'react';
import { sponsors as generalSponsors } from '../data/generalSponsorsData';
import SectionTitle from './SectionTitle';

interface Sponsor {
    name: string;
    logoUrl: string;
    tier: 'Gold' | 'Silver' | 'Bronze';
    url: string;
}

interface SponsorsShowcaseProps {
    sponsors: Sponsor[];
    showStripes?: boolean;
}

const SponsorsShowcase: React.FC<SponsorsShowcaseProps> = ({ sponsors, showStripes = true }) => {
    const goldSponsors = sponsors.filter(s => s.tier === 'Gold');
    const silverSponsors = sponsors.filter(s => s.tier === 'Silver');
    const bronzeSponsors = sponsors.filter(s => s.tier === 'Bronze');

    if (sponsors.length === 0) return null;

    // This function is for the striped layout on the URHacks page
    const renderStripedSponsors = (sponsorList: Sponsor[], sizeClass: string) => (
        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
            {sponsorList.map((sponsor, index) => (
                <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                    <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className={`${sizeClass} object-contain`} />
                </a>
            ))}
        </div>
    );

    return (
        <div className="text-center">
            <SectionTitle>Our Valued Partners</SectionTitle>
            <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
                Our events are made possible by the generous support of our partners. Interested in seeing your logo here? Get in touch!
            </p>

            {showStripes ? (
                <div className="space-y-4">
                    {goldSponsors.length > 0 && <div className="bg-[#fdb927] bg-opacity-20 py-12 rounded-lg">{renderStripedSponsors(goldSponsors, 'h-28')}</div>}
                    {silverSponsors.length > 0 && <div className="bg-gray-200 py-10 rounded-lg">{renderStripedSponsors(silverSponsors, 'h-20')}</div>}
                    {bronzeSponsors.length > 0 && <div className="bg-amber-800 bg-opacity-10 py-8 rounded-lg">{renderStripedSponsors(bronzeSponsors, 'h-16')}</div>}
                </div>
            ) : (
                // --- THIS IS THE UPDATED LOGIC FOR THE HOMEPAGE ---
                <div className="flex justify-center items-center flex-wrap gap-8">
                    {sponsors.map((sponsor, index) => (
                        // Each logo is now in a container with a fixed size
                        <a
                            href={sponsor.url}
                            key={`${sponsor.name}-${index}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-64 h-32 flex items-center justify-center p-4 transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={sponsor.logoUrl}
                                alt={`${sponsor.name} Logo`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SponsorsShowcase;