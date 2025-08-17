import React, { useState, useEffect, useRef } from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element is intersecting the viewport, update the state
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing after it has become visible once
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // observing intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
      }
    );

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup observer on component unmount
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={titleRef} className="mb-10">
      <h2 className="text-4xl lg:text-5xl font-bold text-[#00643f]">{children}</h2>
      <div
        className={`
          h-1.5 bg-[#fdb927] mt-3
          transition-transform duration-700 ease-out
          origin-left
          ${isVisible ? 'scale-x-100' : 'scale-x-0'}
        `}
      ></div>
    </div>
  );
};

export default SectionTitle;