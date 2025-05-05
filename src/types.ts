export interface VideoType {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  likes: string;
  comments: string;
  shares: string;
  category: string;
}

export interface SocialLinkType {
  id: string;
  name: string;
  url: string;
  handle: string;
  icon: JSX.Element;
}