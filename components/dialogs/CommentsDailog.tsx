"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { CardDescription, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Post } from "../PostCard";
import { commentsData } from "@/lib/helper";
import { IoIosArrowBack } from "react-icons/io";
import { ScrollArea } from "../ui/scroll-area";
import { MdFavorite } from "react-icons/md";
import Image from "next/image";
import { Button } from "../ui/button";
import { Eye, Share2, ThumbsUp } from "lucide-react";
import { useState } from "react";
import { HiMiniUserGroup } from "react-icons/hi2";
import { Input } from "../ui/input";
import { RiSendPlaneFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const CommentsDailog = ({
  children,
  post,
}: {
  children: React.ReactNode;
  post: Post;
}) => {
  const comments = commentsData;
  console.log(comments);
  const [isLiked, setIsLiked] = useState(post.likedByUser);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLike = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    setLikes((prev) => (newLikedState ? prev + 1 : prev - 1));
    //   if (onLike) onLike(post.id, newLikedState);
  };

  const handleComment = () => {
    setShowComments(!showComments);
    //   if (onComment) onComment(post.id);
  };

  const handleShare = () => {
    //   if (onShare) onShare(post.id);
    alert(`Sharing: ${post.title}`);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  const handleChanges = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="sm:max-w-[600px] w-full bg-gray-100">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-1 ">
              <button className="text" onClick={() => setIsOpen(false)}>
                <IoIosArrowBack />
              </button>
              Comments({comments.length})
            </DialogTitle>
            <DialogDescription>
              View and add comments on this post.
            </DialogDescription>
          </DialogHeader>
              <div className="">
                <div className="text">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-3 flex-1">
                      <Avatar>
                        <AvatarImage src={post.avatar.src} alt={post.author} />
                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className="text-base">
                            {post.author}
                          </CardTitle>
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
                  <div>
                    <h3 className="font-semibold mb-2">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {post.content}
                    </p>
                  </div>

                  {post.image && (
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={300}
                        className="w-full h-62"
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
                      <ThumbsUp
                        className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                      />
                      <span className="hidden sm:inline">
                        {formatNumber(likes)}
                      </span>
                    </Button>

                    <CommentsDailog post={post}>
                      <p className="text">
                        <Button
                          variant="ghost"
                          size="sm"
                          disabled
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

                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span className="hidden sm:inline">
                        {formatNumber(post.views)}
                      </span>
                    </Button>
                  </div>
                </div>
                <ScrollArea className="h-[220px] bg-white w-full rounded-md p-4">
                  <div className="text relative">
                    <Input
                      type="text"
                      name="comment"
                      id="comment"
                      className="h-12 "
                      placeholder="Add your comment here..."
                      onChange={handleChanges}
                    />
                    <button className="text absolute right-0 top-0 hover:bg-blue-500 flex justify-center items-center h-full w-12 bg-blue-600 rounded-br-lg rounded-tr-lg">
                      <RiSendPlaneFill className="text-white" size={20} />
                    </button>
                  </div>
                  {comments.map((co) => (
                    <div key={co.id}>
                      <div className="flex gap-3 my-5 flex-1">
                        <Avatar>
                          <AvatarImage src={co.avatar} alt={co.author} />
                          <AvatarFallback>{co.author.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <CardTitle className="text-base">
                              {co.author}
                            </CardTitle>
                            {post.sponsored && (
                              <Badge variant="secondary" className="text-xs">
                                Sponsored
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="flex items-center gap-2">
                            {co.username} • {co.time}
                          </CardDescription>
                          <div className="text flex justify-between">
                            <p className="text">{co?.content}</p>
                            <MdFavorite size={20} />
                          </div>
                        </div>
                      </div>
                      {co.replies.length > 0 &&
                        co.replies.map((rep) => (
                          <div key={rep.id} className="text ml-10">
                            <div className="flex gap-3 my-5 flex-1">
                              <Avatar>
                                <AvatarImage
                                  src={rep.avatar}
                                  alt={rep.author}
                                />
                                <AvatarFallback>
                                  {rep.author.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <CardTitle className="text-base">
                                    {rep.author}
                                  </CardTitle>
                                  {post.sponsored && (
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      Sponsored
                                    </Badge>
                                  )}
                                </div>
                                <CardDescription className="flex items-center gap-2">
                                  {rep.username} • {rep.time}
                                </CardDescription>
                                <div className="text flex justify-between">
                                  <p className="text">{rep?.content}</p>
                                  <MdFavorite size={20} />
                                </div>
                              </div>
                            </div>
                            {rep.replies.length > 0 &&
                              rep.replies.map((subrep) => (
                                <div key={subrep.id} className="text ml-10">
                                  <div className="flex gap-3 my-5 flex-1">
                                    <Avatar>
                                      <AvatarImage
                                        src={subrep.avatar}
                                        alt={subrep.author}
                                      />
                                      <AvatarFallback>
                                        {subrep.author.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center gap-2 flex-wrap">
                                        <CardTitle className="text-base">
                                          {subrep.author}
                                        </CardTitle>
                                        {post.sponsored && (
                                          <Badge
                                            variant="secondary"
                                            className="text-xs"
                                          >
                                            Sponsored
                                          </Badge>
                                        )}
                                      </div>
                                      <CardDescription className="flex items-center gap-2">
                                        {subrep.username} • {subrep.time}
                                      </CardDescription>
                                      <div className="text flex justify-between">
                                        <p className="text">
                                          {subrep?.content}
                                        </p>
                                        <MdFavorite size={20} />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        ))}
                    </div>
                  ))}
                </ScrollArea>
              </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CommentsDailog;
