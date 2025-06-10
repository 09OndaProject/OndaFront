"use client";
import React from "react";
import PostSearch from "./_components/PostSearch";
import PostList from "./_components/PostList";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

export default function PostListPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full my-20 max-w-[1440px] px-4 md:px-[160px] mx-auto">
      <div className="w-full flex justify-between">
        <h1 className="text-xl font-bold text-left w-full">게시판</h1>
        <Button onClick={() => router.push("/community/write")}>글쓰기</Button>
      </div>
      <PostSearch />
      <section className="w-full my-10">
        <PostList />
      </section>
    </div>
  );
}
