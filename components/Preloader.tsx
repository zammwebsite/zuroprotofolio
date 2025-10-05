
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark">
      <div className="relative">
        <div className="text-3xl font-bold text-neon-tosca animate-pulse">
          Hai Zuro
        </div>
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 border-2 border-neon-tosca rounded-lg opacity-50 animate-ping"></div>
      </div>
    </div>
  );
};

export default Preloader;
