import React from 'react';
import { Video } from 'lucide-react';

export const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg mr-2 shadow-lg">
        <Video size={24} className="text-white" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold tracking-tighter leading-none">
          <span className="text-white">Dom-I-</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">NATE</span>
        </h1>
        <span className="text-xs text-zinc-400 leading-none">Digital Creator</span>
      </div>
    </div>
  );
};