'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Past Teams', href: '/past-teams' },
        { name: 'URHacks', href: '/urhacks' },
    ];

    return (
        <>
            <header
                className={`sticky top-0 z-[60] w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white border-b-4 border-[#00643f]'
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20 md:h-24">

                        {/* Logo Section */}
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-3 z-[70] relative">
                            <Image
                                src="/logos/csss-logo.png"
                                alt="CSSS Logo"
                                width={40}
                                height={40}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            />

                            {/* --- FIX IS HERE --- */}
                            {/* Removed 'hidden' class. Added 'text-[10px]' for mobile so it fits. */}
                            <div className="text-[10px] md:text-sm font-bold leading-tight text-[#00643f]">
                                <p>University of Regina</p>
                                <p>Computer Science Students&apos; Society</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-semibold text-[#00643f] hover:text-[#fdb927] transition-colors tracking-wider"
                                >
                                    {link.name.toUpperCase()}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex items-center gap-4">
                            <Link
                                href="/#contact"
                                className="hidden lg:block px-6 py-2 bg-[#fdb927] text-[#00643f] font-bold text-base hover:bg-yellow-500 transition-colors rounded-sm"
                            >
                                GET INVOLVED
                            </Link>

                            {/* Mobile Hamburger Button */}
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="lg:hidden p-2 text-[#00643f] z-[70] relative focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-[55] bg-white h-screen w-screen pt-24 pb-8 px-4 overflow-y-auto">
                    <div className="flex flex-col items-center justify-start min-h-[500px] space-y-10 pt-10">
                        <nav className="flex flex-col space-y-8 items-center w-full">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-3xl font-black text-[#00643f] hover:text-[#fdb927] transition-colors"
                                >
                                    {link.name.toUpperCase()}
                                </Link>
                            ))}
                        </nav>

                        <Link
                            href="/#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="px-12 py-4 bg-[#fdb927] text-[#00643f] font-bold text-xl hover:bg-yellow-500 transition-colors rounded shadow-lg w-full max-w-xs text-center"
                        >
                            GET INVOLVED
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}