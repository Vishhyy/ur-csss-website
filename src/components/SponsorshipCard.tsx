
import React from 'react';

interface SponsorshipCardProps {
  tier: string;
  price: string;
  benefits: string[];
  isFeatured?: boolean;
}

const SponsorshipCard: React.FC<SponsorshipCardProps> = ({ tier, price, benefits, isFeatured = false }) => {
  const cardClasses = `border-2 p-8 flex flex-col h-full transition-transform duration-300 hover:scale-105 ${
    isFeatured ? 'border-[#fdb927] bg-gray-50' : 'border-gray-200 bg-white'
  }`;

  return (
    <div className={cardClasses}>
      <div className="flex-grow">
        <h3 className="text-3xl font-bold text-[#00643f]">{tier}</h3>
        <p className="text-xl font-semibold text-gray-800 my-4">{price}</p>
        <ul className="space-y-3 text-gray-700">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <span className="text-[#00643f] font-bold mr-2 mt-1">➔</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <a href="#contact" className="mt-8 block w-full text-center px-6 py-3 font-bold text-white bg-[#00643f] hover:bg-green-900 transition-colors">
        Select Tier
      </a>
    </div>
  );
};

export default SponsorshipCard;
