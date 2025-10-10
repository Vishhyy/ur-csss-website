import React from 'react';
import SectionTitle from './SectionTitle';

const PrizeCard: React.FC<{
    title: string;
    amount: string;
    tier: 'gold' | 'silver' | 'bronze';
}> = ({ title, amount, tier }) => {

    const baseClasses = "bg-[#00643f] text-white p-8 rounded-lg text-center h-full transform transition-transform hover:-translate-y-2 shadow-xl";

    const tierStyles = {
        gold: 'border-4 border-[#fdb927] shadow-2xl',
        silver: 'border-4 border-slate-300',
        bronze: 'border-4 border-[#a16207]',
    };

    const prizeAmountStyles = {
        gold: 'text-6xl text-[#fdb927]',
        silver: 'text-5xl text-white',
        bronze: 'text-5xl text-white',
    };

    const titleStyles = {
        gold: 'text-2xl text-white font-bold mb-4',
        silver: 'text-2xl text-gray-300 font-bold mb-4',
        bronze: 'text-2xl text-gray-300 font-bold mb-4',
    };

    return (
        <div className={`${baseClasses} ${tierStyles[tier]}`}>
            <p className={titleStyles[tier]}>{title}</p>
            <p className={`font-black my-4 ${prizeAmountStyles[tier]}`}>{amount}</p>
            {tier === 'gold' && <p className="text-lg text-gray-300">Grand Prize</p>}
        </div>
    );
};


const PrizePool: React.FC = () => {
    return (
        <section className="py-20 bg-slate-100">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <SectionTitle>Prize Pool</SectionTitle>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-12">
                    <PrizeCard amount="$500" title="Runner-up" tier="silver" />
                    <PrizeCard amount="$1,000" title="Winner" tier="gold" />
                    {/* This title has been updated */}
                    <PrizeCard amount="$200" title="Best Business Solution" tier="bronze" />
                </div>
            </div>
        </section>
    );
};

export default PrizePool;