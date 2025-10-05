
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-neon-tosca/20 rounded-full"></div>
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className={`p-6 bg-glass-light dark:bg-glass-dark rounded-xl shadow-lg border border-neon-tosca/10 text-left ${index % 2 !== 0 ? 'text-right' : ''}`}>
                  <p className="text-sm text-neon-tosca font-semibold mb-1">{exp.year}</p>
                  <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-md opacity-80 mb-3">{exp.company}</p>
                  <p className="text-sm opacity-70 mb-4">{exp.description}</p>
                  <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 ? 'justify-end' : ''}`}>
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-dark-text/10 dark:bg-light-text/10 py-1 px-2 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-tosca rounded-full border-4 border-light-bg dark:border-dark"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
