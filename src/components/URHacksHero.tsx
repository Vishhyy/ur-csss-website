import React, { useState, useEffect } from 'react';
import urHacksLogo from '../assets/logos/urhacks-2025-logo.png';

const URHacksHero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // We only need to set the state once to trigger the sequence
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="bg-gray-800 text-white py-16 overflow-hidden">
            <div className="container mx-auto px-4 text-center">

                {/* --- 1. The Logo animates in first --- */}
                <div
                    className={`
            transform transition-all duration-700 ease-out
            ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}
          `}
                >
                    <img
                        src={urHacksLogo}
                        alt="URHacks 2025 Logo"
                        className="w-full max-w-xl mx-auto"
                    />
                </div>

                {/* --- 2. The Text animates in second, with a delay --- */}
                <p
                    className={`
            text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto my-8
            transform transition-all duration-700 ease-out
            ${isLoaded ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-8'}
          `}
                >
                    Join us for 24 hours of innovation, collaboration, and creation. Build a project, win prizes, and connect with industry leaders.
                </p>

                {/* --- 3. The Button animates in last, with a longer delay --- */}
                <div
                    className={`
            transform transition-all duration-700 ease-out
            ${isLoaded ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-8'}
          `}
                >
                    <a
                        href="#details"
                        className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-3 px-10 text-lg hover:bg-yellow-500 transition-colors transform hover:scale-105"
                    >
                        Learn More
                    </a>
                </div>

            </div>
        </div>
    );
};

export default URHacksHero;