'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { CreatePostModal, PostData } from './CreatePostModal';
import { EventCard } from './EventCard';

interface Event {
  id: string;
  title: string;
  image: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
}

const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Latin Festival 2024',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=400&h=300&fit=crop',
    date: 'Nov 15, 2024',
    time: '6:00 PM',
    location: 'Central Park, New York',
    attendees: 245,
  },
  {
    id: '2',
    title: 'Spanish Language Workshop',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
    date: 'Nov 20, 2024',
    time: '7:00 PM',
    location: 'Community Center',
    attendees: 89,
  },
  {
    id: '3',
    title: 'Networking Dinner',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561a1f?w=400&h=300&fit=crop',
    date: 'Nov 25, 2024',
    time: '7:30 PM',
    location: 'Downtown Restaurant',
    attendees: 156,
  },
  {
    id: '4',
    title: 'Cultural Dance Night',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    date: 'Dec 1, 2024',
    time: '8:00 PM',
    location: 'Dance Studio',
    attendees: 203,
  },
  {
    id: '5',
    title: 'Holiday Celebration Party',
    image: 'https://images.unsplash.com/photo-1519671482677-764e91a8a34e?w=400&h=300&fit=crop',
    date: 'Dec 15, 2024',
    time: '6:00 PM',
    location: 'Community Hall',
    attendees: 412,
  },
  {
    id: '6',
    title: 'New Year Networking Mixer',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
    date: 'Jan 5, 2025',
    time: '7:00 PM',
    location: 'Rooftop Venue',
    attendees: 178,
  },
];

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [attendingEvents, setAttendingEvents] = useState<Set<string>>(new Set());
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const handleAttend = (eventId: string) => {
    const newAttending = new Set(attendingEvents);
    if (newAttending.has(eventId)) {
      newAttending.delete(eventId);
    } else {
      newAttending.add(eventId);
    }
    setAttendingEvents(newAttending);
  };

  const handleCreateEvent = (data: PostData) => {
    const newEvent: Event = {
      id: String(events.length + 1),
      title: data.title,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop',
      date: data.date || 'TBD',
      time: data.time || 'TBD',
      location: data.location || 'TBD',
      attendees: 0,
    };
    setEvents([newEvent, ...events]);
    setIsModalOpen(false);
  };

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Community Events</h1>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => setIsModalOpen(true)}
        >
          Post new event
        </Button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search events by name or location..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            {...event}
            isAttending={attendingEvents.has(event.id)}
            onAttend={() => handleAttend(event.id)}
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredEvents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No events found matching your search.</p>
        </div>
      )}

      {/* Create Event Modal */}
      <CreatePostModal
        isOpen={isModalOpen}
        title="Post new event"
        description="Create a new event for the community"
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateEvent}
        type="event"
      />
    </div>
  );
}

