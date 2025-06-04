import React from "react";
import PostSearch from "./_components/PostSearch";
import PostList from "./_components/PostList";

export default function PostListPage() {
  return (
    <div className="flex flex-col items-center w-full max-w-[1440px] px-4 md:px-[160px] mx-auto">
      <PostSearch />
      <section className="w-full my-10">
        <PostList />
      </section>
    </div>
  );
}
