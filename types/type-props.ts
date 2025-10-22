export interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
  description: string;
  seller: Seller;
  rating?: number;
  reviews?: number;
  isSaved?: boolean;
}

export interface Seller {
  id: string;
  name: string;
  avatar: string;
  connections: number;
  phone?: string;
  bio?: string;
  location?: string;
  posts?: Post[];
}

export interface Community {
  id: string;
  name: string;
  avatar: string;
  description: string;
  members: number;
  comments: number;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  isOnline?: boolean;
}

export interface Post {
  id: string;
  image: string;
  likes?: number;
  comments?: number;
}

export interface CommunityCard {
  id: string;
  name: string;
  description: string;
  members: string[];
  conversationCount: number;
}

export interface LocationView {
  id: string;
  name: string;
  image: string;
  stats: {
    community: string;
    connection: string;
    trends: string;
  };
  communities: Array<{
    name: string;
    count: string;
  }>;
}

