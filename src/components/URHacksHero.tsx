import React, { useState, useEffect } from 'react';
// 1. Corrected the logo import path to include the 'logos' folder
import urHacksLogo from '../assets/logos/urhacks-2025-logo.png';

const URHacksHero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative bg-gradient-to-br from-slate-900 to-gray-800 text-white py-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
            <div className="container mx-auto px-4 text-center">

                <div
                    className={`transform transition-all duration-700 ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={urHacksLogo}
                        alt="URHacks 2025 Logo"
                        className="w-full max-w-md mx-auto"
                    />
                </div>

                <div
                    className={`
            mt-8 w-full max-w-3xl mx-auto bg-black/20 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20
            transform transition-all duration-700 ease-out delay-200
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
                >
                    <p className="text-xl md:text-2xl text-gray-200">
                        Join us for 24 hours of innovation, collaboration, and creation. Build a project, win prizes, and connect with industry leaders.
                    </p>
                    <div className="mt-8 flex items-center justify-center">
                        <a href="#" className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-3 px-10 text-lg hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg">
                            Buy Tickets Now
                        </a>
                    </div>
                </div>
            </div>

            <a
                href="#details"
                className={`
          absolute bottom-8 text-white transition-opacity duration-1000 ease-in delay-500
          ${isLoaded ? 'opacity-50 hover:opacity-100 animate-bounce' : 'opacity-0'}
        `}
                aria-label="Scroll down"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
            </a>

            {/* 2. The broken angled div has been completely removed from here */}
        </div>
    );
};

export default URHacksHero;