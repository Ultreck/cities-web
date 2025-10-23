'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Share2, MoreVertical } from 'lucide-react';

interface CommunityHeaderProps {
  name: string;
  image: string;
  members: number;
  followers: number;
  description: string;
  isFollowing?: boolean;
  onFollow?: () => void;
}

export const CommunityHeader: React.FC<CommunityHeaderProps> = ({
  name,
  image,
  members,
  followers,
  description,
  isFollowing = false,
  onFollow,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Hero Image */}
      <div className="relative h-64 bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{members.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{followers.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-xs text-gray-600">Active</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
            onClick={onFollow}
          >
            <Heart className="w-4 h-4 mr-2" />
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
          <Button variant="outline" className="flex-1">
            View All Members
          </Button>
        </div>
      </div>
    </div>
  );
};

