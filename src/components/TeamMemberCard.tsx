import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// A simple LinkedIn Icon component
const LinkedInIcon: React.FC = () => (
  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

interface TeamMemberCardProps {
  imageUrl: string;
  name: string;
  title: string;
  socials: { [key: string]: string }; // Accepts a socials object
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ imageUrl, name, title, socials }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
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

        {/* --- NEW HOVER OVERLAY --- */}
        <div
          className="absolute inset-0 rounded-full bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center"
        >
          <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#fdb927]">
                <LinkedInIcon />
              </a>
            )}
            {/* You can add more icons here in the future, e.g., for GitHub */}
          </div>
        </div>

        <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-[#fdb927] transition-colors duration-300 pointer-events-none"></div>
      </div>
      <h3 className="mt-4 text-2xl font-bold text-[#00643f]">{name}</h3>
      <p className="text-lg text-gray-700">{title}</p>
    </div>
  );
};

export default TeamMemberCard;