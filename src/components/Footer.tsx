import React from 'react';
import { Logo } from './Logo';
import { Instagram, Twitter, Youtube, Music, Twitch } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & About Section */}
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-zinc-400 max-w-md">
              Digital creator passionate about entertaining and inspiring through unique content. Join my journey as I share my experiences, tips, and everyday adventures.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://instagram.com/dom_i_nater" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} className="text-white" />
              </a>
              <a 
                href="https://twitter.com/dom_i_nater" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-all"
                aria-label="Twitter"
              >
                <Twitter size={18} className="text-white" />
              </a>
              <a 
                href="https://youtube.com/@dom_i_nater" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} className="text-white" />
              </a>
              <a 
                href="https://tiktok.com/@dom_i_nater" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-all"
                aria-label="TikTok"
              >
                <Music size={18} className="text-white" />
              </a>
              <a 
                href="https://twitch.tv/dom_i_nater" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-zinc-800 p-2 rounded-full hover:bg-zinc-700 transition-all"
                aria-label="Twitch"
              >
                <Twitch size={18} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Videos', 'Links', 'Contact', 'About', 'Merch'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-pink-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookies', 'Copyright'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-zinc-400 hover:text-pink-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Dom-I-NATE. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-500">
            <span>Made with <span className="text-pink-500">♥</span> for my followers</span>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Report an issue
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};