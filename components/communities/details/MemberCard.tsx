'use client'

import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, MoreVertical } from 'lucide-react';

interface MemberCardProps {
  id: string;
  name: string;
  avatar: string;
  role: string;
  bio: string;
  joinDate: string;
  isFollowing?: boolean;
  onFollow?: () => void;
  onMessage?: () => void;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  name,
  avatar,
  role,
  bio,
  joinDate,
  isFollowing = false,
  onFollow,
  onMessage,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{name}</h3>
            <p className="text-xs text-blue-600 font-medium">{role}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>

      {/* Bio */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{bio}</p>

      {/* Join Date */}
      <p className="text-xs text-gray-500 mb-4">Joined {joinDate}</p>

      {/* Actions */}
      <div className="flex gap-2">
        <Button
          variant={isFollowing ? 'secondary' : 'default'}
          size="sm"
          className="flex-1 text-xs"
          onClick={onFollow}
        >
          <Heart className="w-3 h-3 mr-1" />
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1 text-xs"
          onClick={onMessage}
        >
          <MessageCircle className="w-3 h-3 mr-1" />
          Message
        </Button>
      </div>
    </div>
  );
};

