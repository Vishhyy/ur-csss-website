import React, { useState, useEffect } from 'react';
import MenuIcon from './MenuIcon';
import XIcon from './XIcon';
import newLogo from '../assets/csss-logo.png';

const CsssLogo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <img
      src={newLogo}
      alt="CSSS Logo"
      className="h-10 w-10 flex-shrink-0"
    />
    <div className="text-sm font-bold leading-tight text-[#00643f]">
      <p>University of Regina</p>
      <p>Computer Science Students' Society</p>
    </div>
  </div>
);


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'URHacks', href: '#urhacks' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white border-b-4 border-[#00643f] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#" aria-label="Home" onClick={handleLogoClick}>
            <CsssLogo />
          </a>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-semibold text-[#00643f] hover:text-[#fdb927] transition-colors tracking-wider"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden lg:block px-8 py-3 bg-[#fdb927] text-[#00643f] font-bold text-lg hover:bg-yellow-500 transition-colors">
            GET INVOLVED
          </a>

          {/* --- CHANGE IS HERE --- */}
          {/* Added 'relative' and 'z-50' to ensure this button stays on top of the overlay */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 text-[#00643f] hover:text-[#fdb927] transition-colors"
            >
              {isMenuOpen ? <XIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col items-center justify-center h-full pt-24 -mt-24">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-3xl font-bold text-[#00643f] hover:text-[#fdb927] transition-colors tracking-wider"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-12 px-10 py-4 bg-[#fdb927] text-[#00643f] font-bold text-xl hover:bg-yellow-500 transition-colors">
            GET INVOLVED
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;