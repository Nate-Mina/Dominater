import React, { useState } from 'react';
import { Bell, Check } from 'lucide-react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubscribed(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-xl shadow-xl overflow-hidden border border-pink-500/20">
      <div className="p-6 md:p-8">
        <div className="flex items-start gap-3 mb-6">
          <Bell className="text-pink-500 mt-1" size={24} />
          <div>
            <h2 className="text-2xl font-bold mb-1">Stay Updated</h2>
            <p className="text-zinc-300">
              Subscribe to get updates on new content, exclusive behind-the-scenes, and special offers.
            </p>
          </div>
        </div>
        
        {isSubscribed ? (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
            <div className="bg-green-500 rounded-full p-1">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-green-100">Thanks for subscribing! Check your email to confirm.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="newsletter-email" className="block text-sm font-medium text-zinc-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={handleChange}
                className={`w-full p-3 bg-zinc-800/80 border ${
                  error ? 'border-red-500' : 'border-zinc-700'
                } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                placeholder="your@email.com"
              />
              {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </div>
            
            <div className="flex items-center">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="h-4 w-4 text-pink-500 focus:ring-pink-500 border-zinc-600 rounded"
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-zinc-300">
                I agree to receive newsletters and accept the <a href="#" className="text-pink-400 hover:text-pink-300 underline">privacy policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-3 rounded-lg font-medium transition-all ${
                isSubmitting 
                  ? 'bg-zinc-600 cursor-not-allowed' 
                  : 'bg-white/10 hover:bg-white/20 border border-white/20'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};