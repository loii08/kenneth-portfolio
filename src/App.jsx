import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="scroll-smooth font-sans bg-gray-100 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
