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

// --- NEW SVG ICON FOR FACEBOOK ---
const FacebookIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.323-1.325z" />
  </svg>
);

// --- NEW SVG ICON FOR DISCORD ---
const DiscordIcon: React.FC = () => (
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.36982C18.775 3.51982 17.025 2.91982 15.175 2.58982C15.15 2.66982 15.125 2.74982 15.1 2.82982C13.5 2.45982 11.8 2.45982 10.2 2.82982C10.175 2.74982 10.15 2.66982 10.125 2.58982C8.275 2.91982 6.525 3.51982 4.983 4.36982C1.567 8.18982 0.883 12.1398 1.183 16.0398C3.083 17.6598 5.15 18.5198 7.333 19.0198C7.383 18.8298 7.433 18.6398 7.483 18.4598C7.016 18.2598 6.583 18.0198 6.183 17.7598C6.15 17.7398 6.133 17.7198 6.116 17.6898C6.016 17.5898 5.933 17.4798 5.85 17.3598C5.833 17.3198 5.816 17.2898 5.8 17.2598C5.2 16.2098 4.8 14.9898 4.716 13.7298C4.7 13.6898 4.7 13.6598 4.7 13.6198C4.683 13.5298 4.683 13.4498 4.683 13.3598C5.233 13.2098 5.766 12.9898 6.266 12.7198C6.316 12.6898 6.366 12.6698 6.416 12.6398C7.433 11.8398 8.35 10.9198 9.116 9.87982C9.2 9.77982 9.283 9.68982 9.366 9.58982C10.55 8.12982 11.35 6.94982 11.35 6.94982C11.35 6.94982 11.433 6.84982 11.516 6.74982C12.9 6.12982 14.35 6.12982 15.75 6.74982C15.833 6.84982 15.916 6.94982 15.916 6.94982C15.916 6.94982 16.716 8.12982 17.9 9.58982C17.983 9.68982 18.066 9.77982 18.15 9.87982C18.916 10.9198 19.833 11.8398 20.85 12.6398C20.9 12.6698 20.95 12.6898 21 12.7198C21.5 12.9898 22.033 13.2098 22.583 13.3598C22.6 13.4498 22.6 13.5298 22.6 13.6198C22.6 13.6598 22.6 13.6898 22.583 13.7298C22.483 14.9898 22.083 16.2098 21.483 17.2598C21.466 17.2898 21.45 17.3198 21.433 17.3598C21.35 17.4798 21.266 17.5898 21.166 17.6898C21.15 17.7198 21.133 17.7398 21.116 17.7598C20.683 18.0198 20.25 18.2598 19.816 18.4598C19.866 18.6398 19.916 18.8298 19.966 19.0198C22.15 18.5198 24.216 17.6598 26.116 16.0398C26.5 11.5898 25.216 7.73982 20.317 4.36982ZM9.483 15.2198C8.55 15.2198 7.783 14.4598 7.783 13.5198C7.783 12.5798 8.55 11.8198 9.483 11.8198C10.416 11.8198 11.183 12.5798 11.166 13.5198C11.166 14.4598 10.416 15.2198 9.483 15.2198ZM17.783 15.2198C16.85 15.2198 16.083 14.4598 16.083 13.5198C16.083 12.5798 16.85 11.8198 17.783 11.8198C18.716 11.8198 19.483 12.5798 19.466 13.5198C19.466 14.4598 18.716 15.2198 17.783 15.2198Z" />
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

        <div className="text-center mt-12">
          <h3 className="text-xl font-bold">Follow Us</h3>
          {/* --- UPDATED SOCIAL MEDIA LINKS --- */}
          <div className="flex justify-center items-center space-x-6 mt-4">
            <a href="https://www.instagram.com/csss.uofr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-white transition-colors">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/csss-uofr/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-white transition-colors">
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/ureginaCSSS" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-white transition-colors">
              <FacebookIcon />
            </a>
            <a href="https://discord.gg/4XwWtNKHjJ" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-gray-300 hover:text-white transition-colors">
              <DiscordIcon />
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