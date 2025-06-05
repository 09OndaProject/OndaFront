import Button from "@/components/common/Button";
import SelectBox from "@/components/common/SelectBox";
import TextInput from "@/components/common/TextInput";
import { categoryOptions } from "@/constants/category";
import { Search } from "lucide-react";
import PostSearchDropdown from "./PostSearchDropdown";
import { useAppSearchParams } from "@/stores/useAppSearchParams";

export default function PostSearch() {
  const { searchParams, updateParams } = useAppSearchParams();

  const handleSearch = () => {
    console.log("검색 파라미터:", searchParams);
  };

  return (
    <div className="w-full flex flex-col gap-4 border-b-2 mt-10 items-end">
      <div className="w-full flex gap-4 flex-wrap">
        <SelectBox
          value={searchParams.category}
          options={categoryOptions}
          placeholder="카테고리"
          onChange={(e) => updateParams("category", Number(e.target.value))}
        />
        <div className="flex-grow">
          <TextInput
            placeholder="제목으로 게시글을 검색해보세요."
            value={searchParams.keyword}
            onChange={(e) =>
              updateParams("keyword", (e.target as HTMLInputElement).value)
            }
            icon={<Search size={24} />}
          ></TextInput>
        </div>
        <Button
          onClick={handleSearch}
          width="min-w-20"
          className="w-full lg:w-auto"
        >
          검색
        </Button>
      </div>
      <PostSearchDropdown />
    </div>
  );
}
