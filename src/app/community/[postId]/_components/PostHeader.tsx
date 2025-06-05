import { PostHeaderProps } from "@/types/post";
import PostMetaData from "../../_components/PostMetaData";

export default function PostHeader(props: PostHeaderProps) {
  const {
    post_id,
    nickname,
    created_at,
    category_id,
    interest_id,
    area_id,
    digitalLevel_id,
    is_author,
    title,
  } = props;

  return (
    <div className="space-y-2 w-full py-10 border-b-2 border-gray-400">
      <PostMetaData
        post_id={post_id}
        category_id={category_id}
        interest_id={interest_id}
        area_id={area_id}
        digitalLevel_id={digitalLevel_id}
        is_author={is_author}
      />
      <h1 className="font-semibold py-4 text-xl">{title}</h1>
      <div className="flex gap-4 text-sm text-gray-500">
        <span>{nickname}</span>
        <span> {created_at.toLocaleDateString()}</span>
      </div>
    </div>
  );
}
