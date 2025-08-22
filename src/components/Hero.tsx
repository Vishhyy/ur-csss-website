import React from 'react';

const Hero: React.FC = () => {
  return (
    // The background image and overlay remain the same
    <div className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* The main content container is now centered */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">

        {/* The solid white box has been removed */}
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-6xl font-extrabold text-white"
            // 1. A drop shadow makes the text pop
            style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}
          >
            Welcome to the Computer Science Students' Society
          </h1>
          <p className="mt-4 text-xl text-gray-200">
            Your hub for events, resources, and community for tech enthusiasts at the University of Regina.
          </p>
          <div className="mt-8">
            <a
              href="#events"
              // 2. The pulsing animation draws attention to the button
              className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-4 px-10 text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 animate-pulse"
            >
              Explore Our Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;