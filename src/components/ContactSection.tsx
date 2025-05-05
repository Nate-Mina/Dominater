import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form after 3 seconds of showing success
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="bg-zinc-800 rounded-xl shadow-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
        
        {isSubmitted ? (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
            <div className="bg-green-500 rounded-full p-1">
              <Check size={16} className="text-white" />
            </div>
            <p className="text-green-100">Thank you! Your message has been sent successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 bg-zinc-700 border ${
                  errors.name ? 'border-red-500' : 'border-zinc-600'
                } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-zinc-700 border ${
                  errors.email ? 'border-red-500' : 'border-zinc-600'
                } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                placeholder="your@email.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-300 mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full p-3 bg-zinc-700 border ${
                  errors.subject ? 'border-red-500' : 'border-zinc-600'
                } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
              >
                <option value="">Select a subject</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Sponsorship">Sponsorship</option>
                <option value="Question">Question</option>
                <option value="Other">Other</option>
              </select>
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full p-3 bg-zinc-700 border ${
                  errors.message ? 'border-red-500' : 'border-zinc-600'
                } rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all`}
                placeholder="Your message"
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 w-full p-3 rounded-lg font-medium transition-all ${
                isSubmitting 
                  ? 'bg-zinc-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={18} />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};