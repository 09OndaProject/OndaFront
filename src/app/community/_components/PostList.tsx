import React from "react";
import PostCard from "./PostCard";
import { dummyPosts } from "@/datas/dummyPosts";
import { Post } from "@/types/post";

export default function PostList() {
  const postsData: Post[] = dummyPosts.map((p) => ({
    post_id: p.post_id,
    title: p.title,
    content: p.content,
    category_id: p.category_id,
    nickname: p.nickname,
    area_id: p.area_id,
    interest_id: p.interest_id,
    image_url: p.image_url ?? undefined,
    created_at: new Date(p.created_at),
    updated_at: p.updated_at ? new Date(p.updated_at) : undefined,
  }));

  return (
    <div className="flex flex-col gap-4 w-full">
      {postsData.map((post) => (
        <PostCard key={post.post_id} post={post} />
      ))}
    </div>
  );
}
