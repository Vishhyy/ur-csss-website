'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function URHacksHero() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => setIsLoaded(true), []);

    return (
        <div className="relative text-white py-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero/urhacks-hero-bg.jpg')" }}>
                <div className="absolute inset-0 bg-slate-900/85"></div>
            </div>
            <div className={`relative z-10 container mx-auto px-4 text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Image src="/logos/urhacks-2025-logo.png" alt="URHacks" width={600} height={300} className="w-full max-w-2xl mx-auto drop-shadow-2xl" priority />
                <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mt-6">Join us for 24 hours of innovation.</p>
            </div>
        </div>
    );
}