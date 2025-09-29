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

                {/* --- The content is now arranged directly on the background --- */}

                {/* 1. Logo Animation */}
                <div className={`transition-all duration-700 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                    <img
                        src={urHacksLogo}
                        alt="URHacks 2025 Logo"
                        className="w-full max-w-lg mx-auto"
                        style={{ filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.5))' }}
                    />
                </div>

                {/* 2. Paragraph Animation */}
                <div className={`transition-all duration-700 ease-out delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mt-6">
                        Join us for 24 hours of innovation, collaboration, and creation. Build a project, win prizes, and connect with industry leaders.
                    </p>
                </div>

                {/* 3. Decorative Divider Animation */}
                <div className={`transition-all duration-700 ease-out delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
                    <div className="w-1/2 max-w-md h-0.5 bg-[#fdb927] mx-auto my-8"></div>
                </div>

                {/* 4. Button Animation */}
                <div className={`transition-all duration-700 ease-out delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                    <a href="#" className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-3 px-10 text-lg hover:bg-yellow-500 transition-colors transform hover:scale-105 shadow-lg">
                        Buy Tickets Now
                    </a>
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
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
            </a>
        </div>
    );
};

export default URHacksHero;