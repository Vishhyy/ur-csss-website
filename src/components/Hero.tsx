import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] min-h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="bg-white/95 p-8 md:p-12 max-w-3xl rounded-r-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#00643f]">Welcome to the Computer Science Students' Society</h1>
          <p className="mt-4 text-xl text-gray-800">
            Your hub for events, resources, and community for tech enthusiasts at the University of Regina.
          </p>
          <div className="mt-8">
            <a href="#events" className="inline-block bg-[#fdb927] text-[#00643f] font-bold py-4 px-10 text-lg hover:bg-yellow-500 transition-colors">
              Explore Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;