import React, { useEffect, useState } from 'react';

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-zinc-900/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Digital World</h2>
            <p className="text-lg md:text-xl text-zinc-300 mb-8">
              Creating engaging content that entertains, inspires, and connects with millions of viewers
            </p>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#videos" 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-pink-500/25"
              >
                Watch My Videos
              </a>
              <a 
                href="#contact" 
                className="bg-zinc-800 text-white hover:bg-zinc-700 font-medium px-6 py-3 rounded-full transition-all border border-zinc-700 hover:border-zinc-600"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};