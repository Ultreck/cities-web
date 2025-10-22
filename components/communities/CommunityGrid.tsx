'use client';

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommunityCard } from "@/types/type-props";

export default function CommunityGrid({filteredCommunities}:{filteredCommunities:CommunityCard[]}) {


  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 border-b">
        <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
         

          {/* Location Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <h2 className="font-semibold text-gray-900">Communities in Lagos</h2>
            </div>
            <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">
              Change location
            </button>
          </div>
        </div>
      </div>

      {/* Communities Grid */}
      <div className="mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {filteredCommunities?.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition cursor-pointer flex flex-col"
            >
              <h3 className="font-bold text-gray-900 mb-2">{community.name}</h3>
              <p className="text-xs text-gray-500 mb-3">{community.description}</p>

              {/* Member Avatars */}
              <div className="flex -space-x-2 mb-3">
                {community.members.slice(0, 2).map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`member-${index}`}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <p className="text-xs text-gray-500 mb-4">
                {community.conversationCount} conversation
              </p>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm">
                View
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      {/* <BottomNav /> */}
    </div>
  );
}

