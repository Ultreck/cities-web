'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CreatePostModal, PostData } from './CreatePostModal';
import { PropertyCard } from './PropertyCard';

interface Property {
  id: string;
  title: string;
  image: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
}

const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 2BR Apartment in Manhattan',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    price: '$2,500/month',
    location: 'Manhattan, New York',
    bedrooms: 2,
    bathrooms: 1,
    description: 'Beautiful modern apartment with hardwood floors and city views.',
  },
  {
    id: '2',
    title: 'Cozy 1BR Studio in Queens',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    price: '$1,800/month',
    location: 'Queens, New York',
    bedrooms: 1,
    bathrooms: 1,
    description: 'Bright and spacious studio apartment near public transportation.',
  },
  {
    id: '3',
    title: 'Spacious 3BR House in Brooklyn',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    price: '$3,200/month',
    location: 'Brooklyn, New York',
    bedrooms: 3,
    bathrooms: 2,
    description: 'Family-friendly house with backyard and parking space.',
  },
  {
    id: '4',
    title: 'Luxury 2BR Penthouse',
    image: 'https://images.unsplash.com/photo-1512917774080-9b41b6b27e6f?w=400&h=300&fit=crop',
    price: '$4,000/month',
    location: 'Upper East Side, New York',
    bedrooms: 2,
    bathrooms: 2,
    description: 'Stunning penthouse with panoramic views and premium amenities.',
  },
  {
    id: '5',
    title: 'Affordable 1BR Apartment',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ee9c470a0?w=400&h=300&fit=crop',
    price: '$1,400/month',
    location: 'Washington Heights, New York',
    bedrooms: 1,
    bathrooms: 1,
    description: 'Budget-friendly apartment perfect for students and young professionals.',
  },
  {
    id: '6',
    title: 'Renovated 2BR Loft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    price: '$2,800/month',
    location: 'Lower East Side, New York',
    bedrooms: 2,
    bathrooms: 1,
    description: 'Recently renovated loft with exposed brick and large windows.',
  },
];

export default function Rent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteProperties, setFavoriteProperties] = useState<Set<string>>(new Set());
  const [properties, setProperties] = useState<Property[]>(mockProperties);

  const handleFavorite = (propertyId: string) => {
    const newFavorites = new Set(favoriteProperties);
    if (newFavorites.has(propertyId)) {
      newFavorites.delete(propertyId);
    } else {
      newFavorites.add(propertyId);
    }
    setFavoriteProperties(newFavorites);
  };

  const handleCreateProperty = (data: PostData) => {
    const newProperty: Property = {
      id: String(properties.length + 1),
      title: data.title,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      price: data.price || 'Contact for price',
      location: data.location || 'TBD',
      bedrooms: 2,
      bathrooms: 1,
      description: data.description,
    };
    setProperties([newProperty, ...properties]);
    setIsModalOpen(false);
  };

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Rental Properties</h1>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Post new property
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search properties by title or location..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
            isFavorite={favoriteProperties.has(property.id)}
            onFavorite={() => handleFavorite(property.id)}
            onContact={() => console.log('Contact:', property.title)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No properties found matching your search.</p>
        </div>
      )}

      {/* Create Property Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        title="Post new property"
        description="List a property for rent in the community"
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateProperty}
        type="property"
      />
    </div>
  );
}

