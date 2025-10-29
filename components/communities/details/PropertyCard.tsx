'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Heart } from 'lucide-react';

interface PropertyCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  isFavorite?: boolean;
  onFavorite?: () => void;
  onContact?: () => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  image,
  price,
  location,
  bedrooms,
  bathrooms,
  description,
  isFavorite = false,
  onFavorite,
  onContact,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-48 bg-gray-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          <Button
            variant="ghost"
            size="icon"
            className="bg-white/80 hover:bg-white"
            onClick={onFavorite}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
        </div>
        <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="truncate">{location}</span>
        </div>

        {/* Features */}
        <div className="flex gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4 text-blue-600" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4 text-blue-600" />
            <span>{bathrooms} Baths</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>

        {/* Action Button */}
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={onContact}
        >
          Contact Owner
        </Button>
      </div>
    </div>
  );
};

