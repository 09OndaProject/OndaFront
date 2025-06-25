"use client";
import { FileData, PostFile } from "./file";

export type Option = {
  id: number;
  name: number;
}

export type Post = {
  id: number;
  title: string;
  content: string;
  category: Option;
  area?: Option | null;
  interest?: Option | null;
  file?: PostFile | null;
  created_at: Date;
  updated_at?: Date | null;
  nickname: string;
  is_mine: boolean;
  like_count?: number;
  //   is_liked: boolean;
};

export type PostWithFile = Post & {
  fileData?: FileData | null;
}

export type PostOptions = {
  id: number;
  category: Option;
  area?: Option | null;
  interest?: Option | null;
};

export type PostAuthor = {
  created_at: Date;
  updated_at?: Date | null;
  nickname: string;
  is_mine: boolean;
};

export type PostContent = {
  content: string;
  file?: string | null;
}

// 댓글 타입
export type Comment = {
  id: number;
  post: number;
  user: number;
  nickname: string;
  content: string;
  parent?: number | null;
  created_at: Date;
  updated_at?: Date;
  is_mine: boolean;
  replies?: Comment[]; // 대댓글
};

// 댓글 생성 페이로드 타입
export type CommentCreatePayload = {
  postId: number;
  content: string;
  parent?: number | null; // 대댓글인 경우 부모 댓글 ID
};

export type CommentUpdatePayload = {
  id: number;
  postId: number;
  content: string;
  parent?: number | null; // 대댓글인 경우 부모 댓글 ID
};

// 댓글 응답 타입
export interface CommentsResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: Comment[];
}
