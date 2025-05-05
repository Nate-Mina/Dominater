import React from 'react';
import { socialLinks } from '../data/links';

export const LinksSection = () => {
  return (
    <section id="links" className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect With Me</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Follow me on social media, explore partnership opportunities, or check out my merchandise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-800/50 backdrop-blur border border-zinc-700/50 rounded-xl p-6 transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-pink-500/10 hover:border-pink-500/30 flex items-center gap-4"
            >
              <div className="bg-gradient-to-br from-zinc-700 to-zinc-800 p-3 rounded-lg group-hover:from-pink-500 group-hover:to-purple-600 transition-all">
                {link.icon}
              </div>
              <div>
                <h3 className="font-medium text-lg text-white">{link.name}</h3>
                <p className="text-zinc-400 text-sm">{link.handle}</p>
              </div>
            </a>
          ))}
        </div>
        
        {/* Special Links - Merchandise, Collab, etc. */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-xl p-6 col-span-full md:col-span-2">
            <h3 className="font-bold text-xl mb-2">Merchandise</h3>
            <p className="text-zinc-300 mb-4">Check out my latest merch drops and rep your favorite content</p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
            >
              <span>Shop Now</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
            </a>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-6 col-span-full lg:col-span-1">
            <h3 className="font-bold text-xl mb-2">Collaborations</h3>
            <p className="text-zinc-300 mb-4">Interested in working together?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all"
            >
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};