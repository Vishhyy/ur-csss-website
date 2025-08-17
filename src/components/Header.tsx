
import React from 'react';

const CsssLogo: React.FC = () => (
    <div className="flex items-center space-x-3">
        <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M28 0L0 16V40L28 56L35 51L14 39V17L35 5L28 0Z" fill="#00643f"/>
            <path d="M28 0L56 16V40L28 56L21 51L42 39V17L21 5L28 0Z" fill="#fdb927"/>
            <path d="M28 0L21 5L42 17V39L21 51L28 56L56 40V16L28 0Z" fill="#fdb927"/>
            <path d="M28 56L21 51L28 46L35 51L28 56Z" fill="#CBD5E0"/>
            <path d="M28 0L21 5L28 10L35 5L28 0Z" fill="#CBD5E0"/>
        </svg>
        <div className="hidden sm:block text-sm font-bold leading-tight text-[#00643f]">
            <p>University of Regina</p>
            <p>Computer Science Students' Society</p>
        </div>
    </div>
);


const Header: React.FC = () => {
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
  };

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
        </div>
      </div>
    </header>
  );
};

export default Header;
