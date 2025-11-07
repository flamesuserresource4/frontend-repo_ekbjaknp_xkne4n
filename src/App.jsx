import React from 'react';
import Hero from './components/Hero';
import Process from './components/Process';
import Infographics from './components/Infographics';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Process />
      <Infographics />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
