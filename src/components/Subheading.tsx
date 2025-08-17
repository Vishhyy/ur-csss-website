import React, { useState, useEffect, useRef } from 'react';

interface SubheadingProps {
    children: React.ReactNode;
}

const Subheading: React.FC<SubheadingProps> = ({ children }) => {
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
            { threshold: 0.1 }
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
        <div ref={titleRef} className="mb-12 text-center">
            <h3 className="text-3xl font-bold text-[#00643f]">{children}</h3>
            <div
                className={`
          w-20 h-1 bg-[#fdb927] mt-3 mx-auto
          transition-transform duration-700 ease-out
          origin-center
          ${isVisible ? 'scale-x-100' : 'scale-x-0'}
        `}
            ></div>
        </div>
    );
};

export default Subheading;