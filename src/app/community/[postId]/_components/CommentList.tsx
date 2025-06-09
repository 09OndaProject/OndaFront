import { dummyComments } from "@/datas/dummyComments";
import React from "react";
import CommentItem from "./CommentItem";
import { Comment } from "@/types/post";

export default function CommentList({ post_id }: { post_id: number }) {
  const comments: Comment[] = dummyComments.filter(
    (c) => c.post_id === post_id
  );
  return (
    <div className="w-full">
      {comments.map((c) => (
        <CommentItem key={c.comment_id} {...c} />
      ))}
    </div>
  );
}
