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
import {
  ThumbsUp,
  Eye,
} from "lucide-react";
import { StaticImageData } from "next/image";
import { HiOutlineShare } from "react-icons/hi2";
import CommentsDailog from "./dialogs/CommentsDailog";
import { AiOutlineComment } from "react-icons/ai";
import RepostDialog from "./dialogs/RepostDialog";
import Link from "next/link";
import { RePostType } from "@/types/type-props";
import PostMedia from "./PostMedia";

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
  post: RePostType;
  onLike?: (id: number, liked: boolean) => void;
  onComment?: (id: number) => void;
  onShare?: (id: number) => void;
  handlePostLikes?: (id: string) => void;
  handleRepost: (id: string, aud: string) => void;

}

export function PostCard({ post, handlePostLikes, handleRepost }: PostCardProps) {
  // const [isLiked, setIsLiked] = useState();
  // const [likes, setLikes] = useState();
  const [showComments, setShowComments] = useState(false);

  // const handleLike = () => {
  //   const newLikedState = !isLiked;
  //   // setIsLiked(newLikedState);
  //   // setLikes((prev) => (newLikedState ? prev + 1 : prev - 1));
  //   // if (onLike) onLike(post.id, newLikedState);
  // };

  const handleComment = () => {
    setShowComments(!showComments);
    // if (onComment) onComment(post.id);
  };

  const handleShare = () => {
    // if (onShare) onShare(post.id);
    // alert(`Sharing: ${post.title}`);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };
  function formatPostTime(timestamp: string) {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  return (
    <Card className="hover:shadow transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex gap-3 flex-1">
            <Avatar>
              <AvatarImage
                src={post?.User?.profile_pic}
                alt={post.User.first_name}
              />
              <AvatarFallback>
                {post?.User?.first_name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <CardTitle className="text-base">
                  {post?.User?.first_name}
                </CardTitle>
                {/* {post.sponsored && (
                  <Badge variant="secondary" className="text-xs">
                    Sponsored
                  </Badge>
                )} */}
              </div>
              <CardDescription className="flex items-center gap-2">
                {post?.User?.first_name + " " + post?.User?.last_name} •{" "}
                {formatPostTime(post.createdAt)}
              </CardDescription>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div>
          {/* <h3 className="font-semibold mb-2">{post.Post.title}</h3> */}
          <p className="text-sm text-muted-foreground">{post.Post.content}</p>
        </div>

        {post.Post.Media.length > 0 && (
          <PostMedia mediaItems={post.Post.Media} />
        )}

        <div className="text flex items-center justify-between pt-2 border-t">
          <CommentsDailog post={post}>
            <Link
              href={`#`}
              className="flex items-center gap-1 text-blue-600 hover:underline"
            >
              <span className="hidden sm:inline">
                {formatNumber(post.Post.commentcount)}
              </span>
              <span className="hidden sm:inline">Comments</span>
            </Link>
          </CommentsDailog>
          <Link
            href={`/n/${post.post_id}/post-engagement?type=likes`}
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <span className="">{formatNumber(post.Post.reactionscount)}</span>
            <span className="hidden sm:inline">Likes</span>
          </Link>
          <Link
            href={`#`}
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <span className="">{formatNumber(post.Post.rePostCount)}</span>
            <span className="hidden sm:inline">Shares</span>
          </Link>
          <Link
            href={`/n/${post.post_id}/post-engagement?type=views`}
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <span className="">{formatNumber(post.Post.views)}</span>
            <span className="hidden sm:inline">Views</span>
          </Link>
        </div>
        <div className="flex items-center justify-between pt-4 border-t">
          <CommentsDailog post={post}>
            <p className="text">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={handleComment}
              >
                <AiOutlineComment className="w-4 h-4" />
                <span className="hidden sm:inline">Comments</span>
              </Button>
            </p>
          </CommentsDailog>
          <Button
            variant={post.Post.isLike ? "default" : "ghost"}
            size="sm"
            className="flex items-center gap-2 transition-all"
            onClick={() => handlePostLikes && handlePostLikes(post.post_id)}
          >
            <ThumbsUp className={`w-4 h-4 ${post.Post.isLike ? "fill-current" : ""}`} />
            <span className="hidden sm:inline">Likes</span>
          </Button>

          <RepostDialog id={post.post_id} onRepost={handleRepost} >
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleShare}
            >
              <HiOutlineShare className="w-4 h-4" />
              <span className="hidden sm:inline">Shares</span>
            </Button>
          </RepostDialog>

          <Button  variant={post.Post.isView ? "default" : "ghost"} size="sm" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Views</span>
          </Button>
        </div>

        {/* {showComments && (
          <div className="pt-4 border-t space-y-3">
            <div className="text-sm text-muted-foreground">
              Comments section coming soon...
            </div>
          </div>
        )} */}
      </CardContent>
    </Card>
  );
}
