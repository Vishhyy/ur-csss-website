import React, { useState, useEffect } from 'react';
import heroBgImage from '../assets/hero/urhacks-hero-bg.jpg';
import urHacksLogo from '../assets/logos/urhacks-2025-logo.png';

const URHacksHero: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const heroStyle = {
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url(${heroBgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div
            className="relative text-white py-20 overflow-hidden min-h-screen flex flex-col items-center justify-center"
            style={heroStyle}
        >
            <div className="container mx-auto px-4 text-center">

                <div className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <img
                        src={urHacksLogo}
                        alt="URHacks 2025 Logo"
                        className="w-full max-w-2xl mx-auto"
                        style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.5))' }}
                    />
                </div>

                <div className={`transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mt-6">
                        Join us for 24 hours of innovation, collaboration, and creation. Build a project, win prizes, and connect with industry leaders.
                    </p>
                </div>

                <div className={`transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
                    <div className="w-1/2 max-w-md h-0.5 bg-[#fdb927] mx-auto my-8"></div>
                </div>

                <div className="flex flex-col items-center gap-8">
                    <div className={`transition-all duration-700 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        <a
                            href="https://buytickets.at/csssuofr/1880991"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-3 px-10 text-lg hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg"
                        >
                            Buy Tickets Now
                        </a>
                    </div>

                    <div className={`transition-all duration-700 ease-out delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-gray-300 mb-4">
                            Join the URHacks Devpost portal to unlock updates and submit your projects.
                        </p>
                        <a
                            href="https://urhacks2025.devpost.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-transparent border-2 border-slate-400 text-slate-300 font-bold py-3 px-8 text-lg hover:bg-slate-700 hover:text-white transition-colors"
                        >
                            Submission Portal
                        </a>
                    </div>
                </div>
            </div>

            <a
                href="#details"
                className={`
          absolute bottom-8 text-white transition-opacity duration-1000 ease-in delay-700
          ${isLoaded ? 'opacity-50 hover:opacity-100 animate-bounce' : 'opacity-0'}
        `}
                aria-label="Scroll down"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </div>
    );
};

export default URHacksHero;