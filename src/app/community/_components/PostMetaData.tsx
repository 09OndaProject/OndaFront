import { POST_CATEGORY_MAP } from "@/constants/category";
import { INTEREST_CATEGORY_MAP } from "@/constants/interestCategory";
import { MapPin, TabletSmartphone } from "lucide-react";
import { PostMetaDataProps } from "@/types/post";
import ActionMenu from "./ActionMenu";

export default function PostMetaData({
  post_id,
  category_id,
  interest_id,
  area_id,
  digitalLevel_id,
  is_author,
}: PostMetaDataProps) {
  const handleEditPost = (id: number) => {
    // TODO: 수정 로직 연결
    console.log(`게시글 ${id} 수정`);
  };

  return (
    <div className="flex justify-between relative text-gray-600 text-sm">
      <div className="flex gap-4">
        <span className="font-medium">
          {category_id && POST_CATEGORY_MAP[category_id]}
        </span>
        {typeof interest_id === "number" && (
          <span className="ml-2 flex items-center gap-1">
            {INTEREST_CATEGORY_MAP[interest_id].icon}
            {INTEREST_CATEGORY_MAP[interest_id].label}
          </span>
        )}
        {area_id && (
          <span className="flex gap-2 items-center">
            <MapPin />
            <span>{area_id}</span>
          </span>
        )}
        {digitalLevel_id && (
          <span className="flex gap-2 items-center">
            <TabletSmartphone />
            <span>{digitalLevel_id}</span>
          </span>
        )}
      </div>
      {is_author && (
        <ActionMenu
          targetId={post_id}
          targetType="post"
          onEdit={handleEditPost}
        />
      )}
    </div>
  );
}
