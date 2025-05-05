import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Videos', 'Links', 'Contact', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-200 hover:text-pink-500 transition-colors font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-sm shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['Videos', 'Links', 'Contact', 'About'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-200 hover:text-pink-500 transition-colors py-2 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};