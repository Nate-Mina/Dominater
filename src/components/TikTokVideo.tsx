import React, { useState } from 'react';
import { Play, Heart, MessageSquare, Share2, Pause } from 'lucide-react';
import { VideoType } from '../types';

interface TikTokVideoProps {
  video: VideoType;
  layout: 'grid' | 'list';
}

export const TikTokVideo: React.FC<TikTokVideoProps> = ({ video, layout }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would control the actual video playback here
  };

  return (
    <div 
      className={`bg-zinc-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 ${
        layout === 'list' ? 'flex flex-col md:flex-row' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Thumbnail Container */}
      <div 
        className={`relative aspect-[9/16] ${
          layout === 'list' ? 'md:w-1/3' : 'w-full'
        }`}
      >
        {/* Thumbnail */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${video.thumbnail})` }}
        ></div>
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/50 flex items-center justify-center ${
          isHovered ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-300`}>
          <button 
            onClick={togglePlay}
            className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? <Pause size={24} className="text-white" /> : <Play size={24} className="text-white" />}
          </button>
        </div>
        
        {/* Duration */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>

        {/* Category Tag */}
        <div className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
          {video.category}
        </div>
      </div>

      {/* Video Info */}
      <div className={`p-4 ${layout === 'list' ? 'md:w-2/3' : ''}`}>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{video.title}</h3>
        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{video.description}</p>
        
        {/* Engagement Metrics */}
        <div className="flex items-center gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-1">
            <Heart size={16} />
            <span>{video.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare size={16} />
            <span>{video.comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <Share2 size={16} />
            <span>{video.shares}</span>
          </div>
        </div>
        
        {/* Sharing Buttons (only show in list view or on hover in grid view) */}
        <div className={`mt-4 flex gap-2 transition-opacity duration-300 ${
          layout === 'list' || isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded" aria-label="Share to Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded" aria-label="Share to Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded" aria-label="Share to Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded" aria-label="Copy link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};