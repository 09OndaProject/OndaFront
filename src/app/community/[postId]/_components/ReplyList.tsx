import React from "react";
import CommentItem from "./CommentItem";
import { Comment } from "@/types/post";
import { CornerDownRight } from "lucide-react";

interface ReplyListProps {
  replies: Comment[] | undefined;
}

export default function ReplyList({ replies }: ReplyListProps) {
  return (
    <div className="flex-col flex-gqp-2 w-full">
      {replies?.map((reply) => (
        <div key={reply.id} className="flex gap-4">
          <CornerDownRight className="my-4 text-gray-500" />
          <CommentItem  comment={reply} />
        </div>
      ))}
    </div>
  );
}
