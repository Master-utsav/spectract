import React from 'react';

const EventHeader: React.FC = () => {
  return (
    <header className="text-center mb-12">
      <div className="relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          SPECTRACT
        </h1>
        <p className="text-xl text-gray-300 mb-8">Coming Soon at LNCT College, Indore</p>
      </div>
    </header>
  );
};

export default EventHeader;