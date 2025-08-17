import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'; // Import the hook

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  title: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, name, title }) => {
  // 1. The hook is ready to use
  const [ref, isVisible] = useIntersectionObserver();

  return (
    // 2. Attach the ref and add the dynamic animation classes to the root element
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        text-center group transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="relative inline-block">
        <img
          src={imageUrl}
          alt={`Photo of ${name}`}
          className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#fdb927] transition-colors duration-300"></div>
      </div>
      <h3 className="mt-4 text-2xl font-bold text-[#00643f]">{name}</h3>
      <p className="text-lg text-gray-700">{title}</p>
    </div>
  );
};

export default TeamMemberCard;