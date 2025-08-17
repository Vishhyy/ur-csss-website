import React from 'react';
import ChevronRightIcon from './ChevronRightIcon';

// SVG Icon for LinkedIn
const LinkedInIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// SVG Icon for Instagram
const InstagramIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.584.07-4.85c.148-3.225 1.664 4.771 4.919 4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#00643f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#fdb927]">Get Involved</h3>
            <p className="mt-2 text-gray-300">Have questions or want to become a sponsor? We'd love to hear from you. Email is our primary way of contact. Let's make great things happen together.</p>
            <a href="mailto:csss.uofr@gmail.com" className="mt-4 inline-block bg-[#fdb927] text-[#00643f] font-bold py-2 px-6 hover:bg-yellow-500 transition-colors">
              Email Us
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold">Contact Information</h3>
            <p className="mt-2 text-gray-300">Computer Science Students’ Society</p>
            <p className="text-gray-300">College West 235.4</p>
            <p className="text-gray-300">3737 Wascana Parkway</p>
            <p className="text-gray-300">Regina, SK S4S 0A2</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white flex items-center group">About CSSS <span className="transform transition-transform duration-200 group-hover:translate-x-1"><ChevronRightIcon /></span></a></li>
              <li><a href="#events" className="text-gray-300 hover:text-white flex items-center group">Our Events <span className="transform transition-transform duration-200 group-hover:translate-x-1"><ChevronRightIcon /></span></a></li>
              <li><a href="#urhacks" className="text-gray-300 hover:text-white flex items-center group">URHacks & Sponsorship <span className="transform transition-transform duration-200 group-hover:translate-x-1"><ChevronRightIcon /></span></a></li>
            </ul>
          </div>
        </div>

        {/* --- NEW SOCIAL MEDIA SECTION --- */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex justify-center items-center space-x-6 mt-4">
            <a href="https://www.instagram.com/csss.uofr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/csss-uofr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-green-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} University of Regina Computer Science Students' Society. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;