import React from 'react';
import ChevronRightIcon from './ChevronRightIcon';
// 1. Import the custom hook we created
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface EventCardProps {
  date: { day: string; month: string };
  title: string;
  time: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ date, title, time, description }) => {
  // 2. Use the hook to get a ref and the visibility state
  const [ref, isVisible] = useIntersectionObserver();

  return (
    // 3. Attach the ref and add the dynamic animation classes
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        flex items-center space-x-6 bg-white p-6 border border-gray-200 
        hover:shadow-xl hover:border-[#fdb927] transition-all duration-500 
        group rounded-lg
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      <div className="flex-shrink-0 text-center bg-gray-50 border border-gray-300 rounded-md shadow-sm w-24 py-3">
        <p className="text-lg font-bold text-[#00643f]">{date.month.toUpperCase()}</p>
        <p className="text-4xl font-black text-gray-800">{date.day}</p>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-[#00643f] group-hover:underline">{title}</h3>
        <p className="mt-1 text-gray-700">{description}</p>
        <p className="mt-2 font-semibold text-sm text-gray-600">{time}</p>
      </div>
      <div className="self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300">
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default EventCard;