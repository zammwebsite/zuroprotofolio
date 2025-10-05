
import React from 'react';
import { motion } from 'framer-motion';
import { DownloadIcon } from './icons';

const skills = [
  'Frontend', 'Backend', 'UI/UX', 'AI Integration'
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12">
            About Me
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img 
              src="https://picsum.photos/seed/zuro-profile/400/400"
              alt="Zuro Profile"
              className="rounded-full w-64 h-64 lg:w-80 lg:h-80 object-cover border-4 border-neon-tosca shadow-lg shadow-neon-tosca/30"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-6 leading-relaxed">
              Aku seorang pengembang kreatif yang suka membangun produk digital, desain UI/UX, dan solusi berbasis AI. With a passion for clean code and delightful user experiences, I strive to build things that are both beautiful and functional.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-glass-light dark:bg-glass-dark py-2 px-4 rounded-full text-sm font-medium border border-neon-tosca/30"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 bg-neon-tosca text-dark font-bold rounded-full text-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-tosca/50"
              >
                <DownloadIcon />
                Download CV
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-transparent border-2 border-neon-tosca text-neon-tosca font-bold rounded-full text-md transition-all duration-300 hover:bg-neon-tosca hover:text-dark"
              >
                Hubungi Saya
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
