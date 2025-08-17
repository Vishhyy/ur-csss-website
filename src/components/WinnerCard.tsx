import React from 'react';
// 1. Import the custom hook
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface WinnerCardProps {
  prize: string;
  title: string;
  subtitle: string;
  description: string;
}

const WinnerCard: React.FC<WinnerCardProps> = ({ prize, title, subtitle, description }) => {
  // 2. Use the hook to get the ref and visibility state
  const [ref, isVisible] = useIntersectionObserver();

  return (
    // 3. Attach the ref and add dynamic animation classes
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        bg-white border border-gray-200 p-6 flex flex-col h-full
        transition-all duration-500
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="flex-grow">
        <p className="font-bold text-[#00643f] text-lg">{prize}</p>
        <h3 className="text-2xl font-bold mt-1">{title}</h3>
        <p className="italic text-gray-600 mb-4">{subtitle}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default WinnerCard;