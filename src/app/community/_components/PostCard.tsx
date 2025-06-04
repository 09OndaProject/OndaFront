import { POST_CATEGORY_MAP } from "@/constants/category";
import { INTEREST_CATEGORY_MAP } from "@/constants/interestCategory";
import { Post } from "@/types/post";
import { formatDate } from "@/utils/utils";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface PostProps {
  post: Post;
}

export default function PostCard({ post }: PostProps) {
  return (
    <Link href={`/community/${post.post_id}`} className="block">
      <div className="px-8 py-4 border border-gray-400 rounded-md flex flex-col gap-4">
        <div className="flex gap-4 text-gray-600 text-sm">
          <span className="font-medium">
            {post.category_id && POST_CATEGORY_MAP[post.category_id]}
          </span>
          {typeof post.interest_id === "number" && (
            <span className="ml-2 flex items-center gap-1">
              {INTEREST_CATEGORY_MAP[post.interest_id].icon}
              {INTEREST_CATEGORY_MAP[post.interest_id].label}
            </span>
          )}
          {post.area_id && (
            <span className="flex gap-2 items-center">
              <MapPin />
              <span>{post.area_id}</span>
            </span>
          )}
        </div>
        <h2 className="text-lg font-semibold">{post.title}</h2>
        {post.image_url && (
          <div className="relative h-[600px] w-full rounded-md overflow-hidden">
            <Image
              src={post.image_url}
              alt="
                 게시물 이미지"
              fill
              className="object-cover"
            />
          </div>
        )}
        <p className="text-md mb-2">{post.content}</p>
        <div className="text-sm text-gray-600">
          <span>{post.nickname}</span>
          <span>{formatDate(post.created_at)}</span>
        </div>
      </div>
    </Link>
  );
}
