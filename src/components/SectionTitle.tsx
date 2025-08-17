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
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    const currentRef = titleRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    // 1. Removed 'text-center'. Text will now be left-aligned by default.
    <div ref={titleRef} className="mb-10">
      <h2 className="text-4xl lg:text-5xl font-bold text-[#00643f]">{children}</h2>
      <div
        className={`
          w-full h-1.5 bg-[#fdb927] mt-3
          transition-transform duration-1000 ease-in-out
          origin-left
          ${isVisible ? 'scale-x-100' : 'scale-x-0'}
        `}
      ></div>
    </div>
  );
};

export default SectionTitle;