
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './hooks/useTheme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ThemeProvider>
      <div className="bg-light-bg dark:bg-dark text-dark-text dark:text-light-text font-sans transition-colors duration-500">
        <Header />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
