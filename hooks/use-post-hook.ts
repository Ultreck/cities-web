"use client";

import clientApi from "@/lib/clientApi";
import { RePostType } from "@/types/type-props";
import { useEffect, useState, useCallback } from "react";

const usePostHook = () => {
  const [posts, setPosts] = useState<RePostType[]>([]);
  const [trigger, setTrigger] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      const res = await clientApi.get(`/post/`);
      setPosts(res.data.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts, trigger]);

  useEffect(() => {
    
  }, []);

  const handlePostLikes = async (id: string) => {
    try {
      const res = await clientApi.post(`/post/react`, { post_id: id });
      console.log("Liked Post:", res.data);
      setTrigger((prev) => !prev);
      setPosts((prevPosts) =>
        prevPosts.map((p) =>
          p.post_id === id
            ? {
                ...p,
                Post: {
                  ...p.Post,
                  isLiked: !p.Post.isLike,
                  reactions_count: p.Post.isLike
                    ? p.Post.reactionscount - 1
                    : p.Post.reactionscount + 1,
                },
              }
            : p
        )
      );
    } catch (err) {
      console.error("Error liking post:", err);
    }
  };

  return {
    handlePostLikes,
    posts,
    refetch: fetchPosts, // optional if you want manual refetch somewhere else
  };
};

export default usePostHook;
