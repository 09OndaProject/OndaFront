"use client";

import React from "react";
import PostHeader from "./_components/PostHeader";
import { useParams } from "next/navigation";
import { useFetchPost } from "@/hooks/useFetchPost";

export default function PostDetailPage() {
  const params = useParams();
  const postId = Number(params?.postId);

  const { post } = useFetchPost(postId);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-40">
        게시글을 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full my-20 max-w-[1440px] px-4 md:px-[160px] mx-auto">
      <h1 className="text-xl font-bold text-left w-full">게시판</h1>
      <PostHeader
        post_id={post.post_id}
        nickname={post.nickname}
        created_at={post.created_at}
        updated_at={post.updated_at}
        category_id={post.category_id}
        interest_id={post.interest_id}
        area_id={post.area_id ?? null}
        digitalLevel_id={post.digitalLevel_id ?? null}
        is_author={post.is_author}
        title={post.title}
      />
    </div>
  );
}
