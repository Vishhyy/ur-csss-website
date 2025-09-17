import React from 'react';
import { sponsors } from '../data/ourSponsorsData';
import SectionTitle from './SectionTitle';

const SponsorsShowcase: React.FC = () => {
    const goldSponsors = sponsors.filter(s => s.tier === 'Gold');
    const silverSponsors = sponsors.filter(s => s.tier === 'Silver');
    const bronzeSponsors = sponsors.filter(s => s.tier === 'Bronze');

    if (sponsors.length === 0) {
        return null;
    }

    return (
        <div className="text-center">
            <SectionTitle>Our Valued Partners</SectionTitle>

            <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
                Our events are made possible by the generous support of our sponsors. Interested in seeing your logo here? Get in touch!
            </p>

            <div className="space-y-4"> {/* Reduced the space between the stripes */}

                {/* --- Gold Tier Stripe --- */}
                {goldSponsors.length > 0 && (
                    <div className="bg-[#fdb927] bg-opacity-20 py-12 rounded-lg">
                        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
                            {goldSponsors.map((sponsor, index) => (
                                <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-28 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Silver Tier Stripe --- */}
                {silverSponsors.length > 0 && (
                    <div className="bg-gray-200 py-10 rounded-lg">
                        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
                            {silverSponsors.map((sponsor, index) => (
                                <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-20 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- Bronze Tier Stripe --- */}
                {bronzeSponsors.length > 0 && (
                    <div className="bg-amber-800 bg-opacity-10 py-8 rounded-lg">
                        <div className="flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
                            {bronzeSponsors.map((sponsor, index) => (
                                <a href={sponsor.url} key={`${sponsor.name}-${index}`} target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-105">
                                    <img src={sponsor.logoUrl} alt={`${sponsor.name} Logo`} className="h-16 object-contain" />
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SponsorsShowcase;