'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Users, Globe } from 'lucide-react';

interface CommunityNetwork {
  id: string;
  name: string;
  location: string;
  members: number;
  image: string;
  description: string;
  isConnected?: boolean;
}

const mockNetworks: CommunityNetwork[] = [
  {
    id: '1',
    name: 'New York Latin Community',
    location: 'New York, USA',
    members: 2450,
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop',
    description: 'Main community hub for Latin culture in New York',
  },
  {
    id: '2',
    name: 'Los Angeles Latino Network',
    location: 'Los Angeles, USA',
    members: 3200,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'Vibrant community connecting Latinos in LA',
  },
  {
    id: '3',
    name: 'Miami Hispanic Community',
    location: 'Miami, USA',
    members: 2800,
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
    description: 'Heart of Hispanic culture and commerce',
  },
  {
    id: '4',
    name: 'Chicago Latino Hub',
    location: 'Chicago, USA',
    members: 1950,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300&fit=crop',
    description: 'Growing community in the Midwest',
  },
  {
    id: '5',
    name: 'Toronto Latin American Network',
    location: 'Toronto, Canada',
    members: 1650,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop',
    description: 'Canadian hub for Latin American connections',
  },
  {
    id: '6',
    name: 'London Latin Community',
    location: 'London, UK',
    members: 1200,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop',
    description: 'European center for Latin culture',
  },
  {
    id: '7',
    name: 'Madrid Spanish Network',
    location: 'Madrid, Spain',
    members: 2100,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop',
    description: 'Connecting diaspora communities with Spain',
  },
  {
    id: '8',
    name: 'Mexico City Hub',
    location: 'Mexico City, Mexico',
    members: 3500,
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    description: 'Central hub for Latin American networks',
  },
];

export default function Diaspora() {
  const [searchQuery, setSearchQuery] = useState('');
  const [connectedNetworks, setConnectedNetworks] = useState<Set<string>>(new Set());

  const handleConnect = (networkId: string) => {
    const newConnected = new Set(connectedNetworks);
    if (newConnected.has(networkId)) {
      newConnected.delete(networkId);
    } else {
      newConnected.add(networkId);
    }
    setConnectedNetworks(newConnected);
  };

  const filteredNetworks = mockNetworks.filter(
    (network) =>
      network.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      network.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Diaspora Network</h1>
        <p className="text-gray-600">
          Connect with Latin communities around the world and expand your network globally.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search communities by name or location..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Networks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNetworks.map((network) => (
          <div
            key={network.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow"
          >
            {/* Image */}
            <div className="h-48 bg-gray-200 overflow-hidden">
              <img
                src={network.image}
                alt={network.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{network.name}</h3>
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">{network.description}</p>

              {/* Details */}
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{network.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>{network.members.toLocaleString()} members</span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                className={`w-full ${
                  connectedNetworks.has(network.id)
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                onClick={() => handleConnect(network.id)}
              >
                <Globe className="w-4 h-4 mr-2" />
                {connectedNetworks.has(network.id) ? 'Connected' : 'Connect'}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredNetworks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No communities found matching your search.</p>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Network Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{mockNetworks.length}</div>
            <div className="text-sm text-gray-600">Active Communities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">
              {mockNetworks.reduce((sum, n) => sum + n.members, 0).toLocaleString()}
            </div>
            <div className="text-sm text-gray-600">Total Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">{connectedNetworks.size}</div>
            <div className="text-sm text-gray-600">Your Connections</div>
          </div>
        </div>
      </div>
    </div>
  );
}

