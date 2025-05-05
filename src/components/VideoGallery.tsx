import React, { useState, useEffect } from 'react';
import { TikTokVideo } from './TikTokVideo';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { mockTikTokData } from '../data/tiktokData';

type LayoutType = 'grid' | 'list';

export const VideoGallery = () => {
  const [layout, setLayout] = useState<LayoutType>('grid');
  const [filter, setFilter] = useState('all');
  const [videos, setVideos] = useState(mockTikTokData);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setVideos(mockTikTokData);
    } else {
      setVideos(mockTikTokData.filter(video => video.category === filter));
    }
  }, [filter]);

  const categories = ['all', 'music', 'computers', 'hobbies', 'contact'];

  return (
    <section id="videos" className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">TikTok</span> Content</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Check out my latest videos and join over 100K followers who enjoy my content daily
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          {/* Categories Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                  filter === cat
                    ? 'bg-pink-500 text-white font-medium'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Layout Toggle */}
          <div className="flex items-center gap-2 bg-zinc-800 p-1 rounded-lg">
            <button
              onClick={() => setLayout('grid')}
              className={`p-2 rounded ${
                layout === 'grid' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-label="Grid layout"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setLayout('list')}
              className={`p-2 rounded ${
                layout === 'list' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-zinc-200'
              }`}
              aria-label="List layout"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
          </div>
        ) : (
          <div className={`${
            layout === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'flex flex-col gap-6'
          }`}>
            {videos.map((video) => (
              <TikTokVideo key={video.id} video={video} layout={layout} />
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="https://www.tiktok.com/@dom_i_nater" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-full transition-all"
          >
            <span>See all videos on TikTok</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </div>
    </section>
  );
};