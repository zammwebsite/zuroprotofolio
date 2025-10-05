
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['About', 'Portfolio', 'Experience', 'Contact'];

  const scrollToSection = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-glass-light dark:bg-glass-dark backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:text-neon-tosca"
            style={{ textShadow: '0 0 5px rgba(111, 255, 233, 0.5)' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Hai Zuro
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-lg font-medium hover:text-neon-tosca transition-colors duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-tosca group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>
          <div className="flex items-center">
             <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
