import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import ChevronRightIcon from './ChevronRightIcon';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface EventCardProps {
  date: { day: string; month: string };
  title: string;
  time: string;
  description: string;
  linkTo?: string; // The link is an optional prop
}

const EventCard: React.FC<EventCardProps> = ({ date, title, time, description, linkTo }) => {
  const [ref, isVisible] = useIntersectionObserver();

  // This is the JSX for the card's content.
  const cardContent = (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        flex items-center space-x-6 bg-white p-6 border border-gray-200 
        hover:shadow-xl hover:border-[#fdb927] transition-all duration-500 
        rounded-lg h-full
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

  // If a linkTo prop is provided, wrap the content in a Link.
  if (linkTo) {
    return (
      <Link to={linkTo} className="group">
        {cardContent}
      </Link>
    );
  }

  // Otherwise, render the content as a standard div.
  return cardContent;
};

export default EventCard;