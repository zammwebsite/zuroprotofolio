
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { fetchGithubProjects } from '../services/githubService';
import { FALLBACK_PROJECTS, GITHUB_USERNAME } from '../constants';
import { GitHubIcon, ExternalLinkIcon } from './icons';

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className="bg-glass-light dark:bg-glass-dark rounded-xl overflow-hidden group border border-transparent hover:border-neon-tosca/50 transition-all duration-300 shadow-lg hover:shadow-neon-tosca/20 transform hover:-translate-y-2"
    >
      <img src={project.thumbnail || `https://picsum.photos/seed/${project.id}/600/400`} alt={project.name} className="w-full h-48 object-cover" loading="lazy" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-sm opacity-80 mb-4 h-20 overflow-hidden">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics?.slice(0, 4).map(tag => (
            <span key={tag} className="text-xs bg-neon-tosca/20 text-neon-tosca py-1 px-2 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-neon-tosca/20 transition-colors"><GitHubIcon /></a>
          {project.homepage && (
            <a href={project.homepage} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold hover:text-neon-tosca transition-colors">
              Live Demo <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const fetchedProjects = await fetchGithubProjects(GITHUB_USERNAME);
      if (fetchedProjects.length > 0) {
        setProjects(fetchedProjects);
      } else {
        setProjects(FALLBACK_PROJECTS);
      }
      setLoading(false);
    };
    loadProjects();
  }, []);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-light-bg/50 dark:bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12">
            Portfolio
        </motion.h2>
        
        {loading ? (
          <div className="text-center">Loading projects...</div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
