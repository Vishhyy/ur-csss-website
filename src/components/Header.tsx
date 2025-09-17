import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from './MenuIcon';
import XIcon from './XIcon';
import newLogo from '../assets/csss-logo.png';

const CsssLogo: React.FC = () => (
  <div className="flex items-center space-x-3">
    <img src={newLogo} alt="CSSS Logo" className="h-10 w-10 flex-shrink-0" />
    <div className="text-sm font-bold leading-tight text-[#00643f]">
      <p>University of Regina</p>
      <p>Computer Science Students' Society</p>
    </div>
  </div>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Past Teams', href: '/past-teams' },
    { name: 'URHacks', href: '/urhacks' },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // --- THIS IS THE UPDATED LOGIC ---
  useEffect(() => {
    if (isMenuOpen) {
      // When menu opens, add the 'no-scroll' class to the body
      document.body.classList.add('no-scroll');
    } else {
      // When menu closes, remove the 'no-scroll' class
      document.body.classList.remove('no-scroll');
    }
    // Cleanup function to ensure the class is removed if the component unmounts
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white border-b-4 border-[#00643f] sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link to="/" aria-label="Home" onClick={() => setIsMenuOpen(false)}>
            <CsssLogo />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-semibold text-[#00643f] hover:text-[#fdb927] transition-colors tracking-wider"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          <Link to="/#contact" onClick={handleLinkClick} className="hidden lg:block px-8 py-3 bg-[#fdb927] text-[#00643f] font-bold text-lg hover:bg-yellow-500 transition-colors">
            GET INVOLVED
          </Link>

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
              <Link
                key={link.name}
                to={link.href}
                onClick={handleLinkClick}
                className="text-3xl font-bold text-[#00643f] hover:text-[#fdb927] transition-colors tracking-wider"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </nav>
          <Link to="/#contact" onClick={handleLinkClick} className="mt-12 px-10 py-4 bg-[#fdb927] text-[#00643f] font-bold text-xl hover:bg-yellow-500 transition-colors">
            GET INVOLVED
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;