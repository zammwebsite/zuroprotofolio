
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-dark to-teal-900 animate-gradient bg-[length:200%_200%] z-0"></div>
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-light-text mb-4"
        >
          <span className="mr-2">👋</span> Hai, Aku Zuro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
        >
          Developer & Creative Technologist.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={scrollToPortfolio}
          className="px-8 py-4 bg-neon-tosca text-dark font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-tosca/50"
        >
          Lihat Portofolio
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
