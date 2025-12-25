import Link from 'next/link';
import { Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';

// Custom Discord Icon Component
const DiscordIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 127.14 96.36"
        fill="currentColor"
        className={className}
    >
        <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,29,6.83,72.37,72.37,0,0,0,25.64,0,105.27,105.27,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.11,77.11,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22c2.29-23.86-2.56-48-18.9-72.15ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
    </svg>
);

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#00643f] text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-[#fdb927]">Get Involved</h3>
                        <p className="mt-2 text-gray-300">Have questions or want to become a sponsor? We&apos;d love to hear from you. Email is our primary way of contact.</p>
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
                            <li><Link href="/#about" className="text-gray-300 hover:text-white flex items-center group">About CSSS <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></Link></li>
                            <li><Link href="/#events" className="text-gray-300 hover:text-white flex items-center group">Our Events <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></Link></li>
                            <li><Link href="/urhacks" className="text-gray-300 hover:text-white flex items-center group">URHacks <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" /></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-xl font-bold">Follow Us</h3>
                    <div className="flex justify-center items-center space-x-6 mt-4">
                        <a
                            href="https://www.instagram.com/csss.uofr/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/csss-uofr/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <Linkedin />
                        </a>
                        {/* 
                   I removed Facebook as you requested in a previous prompt that only IG, LinkedIN and Discord were relevant.
                   Uncomment if you want Facebook back.
                */}
                        {/* 
                <a 
                  href="https://www.facebook.com/ureginaCSSS" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <Facebook />
                </a> 
                */}
                        <a
                            href="https://discord.com/invite/4XwWtNKHjJ"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <DiscordIcon className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 border-t border-green-700 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} University of Regina Computer Science Students&apos; Society.</p>
                </div>
            </div>
        </footer>
    );
}