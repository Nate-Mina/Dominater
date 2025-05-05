import React from 'react';
import { Instagram, Twitter, Youtube, Twitch, ShoppingBag, Music } from 'lucide-react';
import { SocialLinkType } from '../types';

export const socialLinks: SocialLinkType[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/dom_i_nater',
    handle: '@dom_i_nater',
    icon: <Instagram size={20} className="text-white"/>
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/dom_i_nater',
    handle: '@dom_i_nater',
    icon: <Twitter size={20} className="text-white"/>
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/@dom_i_nater',
    handle: '@dom_i_nater',
    icon: <Youtube size={20} className="text-white"/>
  },
  {
    id: 'twitch',
    name: 'Twitch',
    url: 'https://twitch.tv/dom_i_nater',
    handle: '@dom_i_nater',
    icon: <Twitch size={20} className="text-white"/>
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    url: 'https://tiktok.com/@dom_i_nater',
    handle: '@dom_i_nater',
    icon: <Music size={20} className="text-white"/>
  },
  {
    id: 'merch',
    name: 'Merch Store',
    url: 'https://shop.dom-i-nate.com',
    handle: 'shop.dom-i-nate.com',
    icon: <ShoppingBag size={20} className="text-white"/>
  }
];