import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Sports from './components/Sports';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  // Smooth scroll behavior correction for older browsers or just consistency
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="antialiased text-gray-800 bg-slate-50 min-h-screen font-body selection:bg-cyan-200 selection:text-cyan-900">
      <Header />
      <main>
        <Hero />
        <Education />
        <Sports />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
