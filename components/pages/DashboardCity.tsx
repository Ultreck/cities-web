"use client";

import React, { useState } from "react";
import { SearchBar } from "../SearchBar";
import {
  currentUser,
  initialCommunities,
  initialEvents,
  initialJobs,
  initialPosts,
} from "@/lib/helper";
import { PostCard } from "../PostCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, DollarSign, MapPin, Send, TrendingUp } from "lucide-react";

const DashboardCity = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [communities, setCommunities] = useState(initialCommunities);
  const searchData = [
    ...posts.map((p) => ({ ...p, type: "post" })),
    ...communities.map((c) => ({ ...c, type: "community" })),
    ...initialJobs.map((j) => ({ ...j, type: "job" })),
  ];
  const handleSearch = (item: any) => {
    console.log("Selected:", item);
    // Navigate to the appropriate tab based on item type
    if (item.type === "community") {
      //   setActiveTab("community");
    } else if (item.type === "job") {
      //   setActiveTab("forsale");
    }
  };

  const handleLike = (postId: any, liked: boolean) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postId
          ? {
              ...post,
              likedByUser: liked,
              likes: liked ? post.likes + 1 : post.likes - 1,
            }
          : post
      )
    );
  };

  const handleJoinCommunity = (communityId: any) => {
    setCommunities((prev) =>
      prev.map((comm) =>
        comm.id === communityId ? { ...comm, joined: !comm.joined } : comm
      )
    );
  };

  return (
    <div>
        <h2 className="text-2xl font-bold py-3">Dashboard</h2>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {/* Mobile Search */}
          <div className="md:hidden mb-4">
            <SearchBar
              placeholder="Search..."
              data={searchData}
              onSearch={handleSearch}
            />
          </div>

          {/* Posts Feed */}
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onLike={handleLike} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden sticky top-0 lg:block space-y-4">
          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Balance</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Ledger balance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                N{currentUser.balance.toLocaleString()}
              </div>
              <div className="text-sm text-primary-foreground/80 mb-4">
                +N0.00 last 7 days
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="secondary" size="sm">
                  <Send className="w-4 h-4 mr-2" />
                  Transfer
                </Button>
                <Button variant="secondary" size="sm">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Fund
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Trending Communities */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Trending Communities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {communities.slice(0, 3).map((community) => (
                <div
                  key={community.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{community.image}</div>
                    <div>
                      <div className="font-medium text-sm">
                        {community.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {community.members} members
                      </div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant={community.joined ? "outline" : "default"}
                    onClick={() => handleJoinCommunity(community.id)}
                  >
                    {community.joined ? "Joined" : "Join"}
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Upcoming Events
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {initialEvents.slice(0, 2).map((event) => (
                <div
                  key={event.id}
                  className="space-y-2 pb-3 border-b last:border-0 last:pb-0"
                >
                  <div className="font-medium text-sm line-clamp-2">
                    {event.name}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                  <Button size="sm" className="w-full">
                    Get Ticket
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardCity;
