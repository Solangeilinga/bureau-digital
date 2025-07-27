import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Shop from './components/Shop';
import Contact from './components/Contact';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      <FloatingHearts />
      <Navbar />
      <Header isVisible={isVisible.header} />
      <About isVisible={isVisible.about} />
      <Services isVisible={isVisible.services} />
      <Shop isVisible={isVisible.boutique} />
      <Contact isVisible={isVisible.contact} />
    </div>
  );
}

export default App;