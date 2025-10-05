
import React from 'react';
import { GitHubIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from './icons';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const navLinks = ['Home', 'About', 'Portfolio', 'Contact'];

  return (
    <footer className="bg-dark text-light-text py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="mx-3 text-lg font-medium hover:text-neon-tosca transition-colors duration-300"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors transform hover:scale-110 duration-300"><GitHubIcon /></a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors transform hover:scale-110 duration-300"><LinkedInIcon /></a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors transform hover:scale-110 duration-300"><TwitterIcon /></a>
          <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-neon-tosca transition-colors transform hover:scale-110 duration-300"><InstagramIcon /></a>
        </div>
        <p className="opacity-70">&copy; {new Date().getFullYear()} Hai Zuro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
