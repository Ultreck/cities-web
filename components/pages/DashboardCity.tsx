"use client";

import React, { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar";
import {
  currentUser,
  initialCommunities,
  initialEvents,
  initialJobs,
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
import {
  Calendar,
  Eye,
  FileText,
  Heart,
  MapPin,
  Send,
  ShoppingBag,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import clientApi from "@/lib/clientApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/userSlice";
import usePostHook from "@/hooks/use-post-hook";

const DashboardCity = () => {
  const [communities, setCommunities] = useState(initialCommunities);
  const dispatch = useDispatch();
  const {posts, handlePostLikes, handleRepost} = usePostHook();

  useEffect(() => {
    const response = clientApi.get("/user");
    response
      .then((res) => {
        dispatch(setUser({ details: res.data.user }));
      })
      .catch((err) => {
        console.error(err);
      });
    // const posts = clientApi.get(`/post/`);
    // posts
    //   .then((res) => {
    //     console.log(res.data.data);
    //     setPosts(res.data.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, [dispatch]);

  const searchData = [
    ...posts.map((p) => ({ ...p, type: "post" })),
    ...communities.map((c) => ({ ...c, type: "community" })),
    ...initialJobs.map((j) => ({ ...j, type: "job" })),
  ];
  const handleSearch = (item: { type: string }) => {
    console.log("Selected:", item);
    // Navigate to the appropriate tab based on item type
    if (item.type === "community") {
      //   setActiveTab("community");
    } else if (item.type === "job") {
      //   setActiveTab("forsale");
    }
  };

  const handleLike = (postId: string, liked: boolean) => {
    // setPosts((prev) =>
    //   prev.map((post) =>
    //     post.id === postId
    //       ? {
    //           ...post,
    //           likedByUser: liked,
    //           likes: liked ? post.likes + 1 : post.likes - 1,
    //         }
    //       : post
    //   )
    // );
  };

  const handleJoinCommunity = (communityId: string) => {
    setCommunities((prev) =>
      prev.map((comm) =>
        comm.id === communityId ? { ...comm, joined: !comm.joined } : comm
      )
    );
  };

  return (
    <div className="px-3 sm:px-0">
      <div className="text flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold py-3 ">Dashboard</h2>
        <Link
          href="/n/create-post"
          className="text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-3 hover:underline"
        >
          Add Post
        </Link>
      </div>
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
            <PostCard key={post.unique_id} handleRepost={handleRepost} post={post} handlePostLikes={handlePostLikes} onLike={handleLike} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="hidden sticky top-0 lg:block space-y-4">
          {/* Balance Card */}
          <Card className="bg-gradient-to-br from-blue-600 to-primary/80 text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-lg">Balance</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Ledger balance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                ₦{currentUser.balance.toLocaleString()}
              </div>
              <div className="text-sm text-primary-foreground/80 mb-4">
                +₦0.00 last 7 days
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link className="w-full" href="/n/wallets/transfers">
                  <Button className="w-full" variant="secondary" size="sm">
                    <Send className="w-4 h-4 mr-2" />
                    Transfer
                  </Button>
                </Link>
                <Link className="w-full" href="/n/wallets/">
                  <Button className="w-full" variant="secondary" size="sm">
                    <Wallet className="w-4 h-4 mr-2" />
                    wallet
                  </Button>
                </Link>
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
                    variant={community.joined ? "outline" : "secondary"}
                    onClick={() => handleJoinCommunity(community.id)}
                    className={`bg-blue-600 text-white hover:bg-blue-700 ${
                      community.joined
                        ? "bg-gray-100 text-black hover:bg-slate-100"
                        : ""
                    }`}
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
                  <Button
                    size="sm"
                    className="bg-blue-600 text-white py-3 w-full"
                  >
                    Get Ticket
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
          {/* Benefits */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Platform Features
            </h3>
            <div className="grid grid-cols-1  gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <FileText size={20} className="text-blue-600" />
                  Create and Share
                </h4>
                <p className="text-slate-600">
                  Create beautiful posts with multiple images. Control who can
                  see your content.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Eye size={20} className="text-purple-600" />
                  Track Engagement
                </h4>
                <p className="text-slate-600">
                  See who viewed and liked your posts. Connect with engaged
                  users.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <ShoppingBag size={20} className="text-green-600" />
                  Marketplace
                </h4>
                <p className="text-slate-600">
                  Browse products and list your own items for sale with detailed
                  descriptions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
                  <Heart size={20} className="text-red-600" />
                  Community
                </h4>
                <p className="text-slate-600">
                  Connect with users, like posts, and build meaningful
                  relationships.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardCity;