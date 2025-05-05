import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoGallery } from './components/VideoGallery';
import { LinksSection } from './components/LinksSection';
import { ContactSection } from './components/ContactSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <main>
        <Hero />
        <VideoGallery />
        <LinksSection />
        <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
          <ContactSection />
          <Newsletter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;