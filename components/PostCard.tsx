"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  ThumbsUp,
  MessageCircle,
  Share2,
  Eye,
  ChevronRight,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { HiMiniUserGroup } from "react-icons/hi2";
import CommentsDailog from "./dialogs/CommentsDailog";

export interface Post {
  id: number;
  author: string;
  username: string;
  avatar: StaticImageData;
  time: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  views: number;
  sponsored: boolean;
  likedByUser: boolean;
  image?: StaticImageData;
}

interface PostCardProps {
  post: Post;
  onLike?: (id: number, liked: boolean) => void;
  onComment?: (id: number) => void;
  onShare?: (id: number) => void;
}

export function PostCard({ post, onLike, onComment, onShare }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(post.likedByUser);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikes((prev) => (newLikedState ? prev + 1 : prev - 1));
    if (onLike) onLike(post.id, newLikedState);
  };

  const handleComment = () => {
    setShowComments(!showComments);
    if (onComment) onComment(post.id);
  };

  const handleShare = () => {
    if (onShare) onShare(post.id);
    alert(`Sharing: ${post.title}`);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <Card className="hover:shadow transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex gap-3 flex-1">
            <Avatar>
              <AvatarImage src={post.avatar.src} alt={post.author} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">{post.author}</CardTitle>
                {post.sponsored && (
                  <Badge variant="secondary" className="text-xs">
                    Sponsored
                  </Badge>
                )}
              </div>
              <CardDescription className="flex items-center gap-2">
                {post.username} • {post.time}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">{post.title}</h3>
          <p className="text-sm text-muted-foreground">{post.content}</p>
        </div>

        {post.image && (
          <div className="rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full h-auto"
              placeholder="blur"
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t">
          <Button
            variant={isLiked ? "default" : "ghost"}
            size="sm"
            className="flex items-center gap-2 transition-all"
            onClick={handleLike}
          >
            <ThumbsUp className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
            <span className="hidden sm:inline">{formatNumber(likes)}</span>
          </Button>

          <CommentsDailog post={post} >
            <p className="text">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleComment}
              >
                <HiMiniUserGroup className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {formatNumber(post.comments)}
                </span>
              </Button>
            </p>
          </CommentsDailog>

          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-2"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">
              {formatNumber(post.shares)}
            </span>
          </Button>

          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">{formatNumber(post.views)}</span>
          </Button>
        </div>

        {showComments && (
          <div className="pt-4 border-t space-y-3">
            <div className="text-sm text-muted-foreground">
              Comments section coming soon...
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
