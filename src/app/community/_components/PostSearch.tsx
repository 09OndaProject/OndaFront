import Button from "@/components/common/Button";
import SelectBox from "@/components/common/SelectBox";
import TextInput from "@/components/common/TextInput";
import { categoryOptions } from "@/constants/category";
import { Search } from "lucide-react";
import React, { useState } from "react";
import PostSearchDropdown from "./PostSearchDropdown";

export default function PostSearch() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="w-full flex flex-col gap-4 border-b-2 mt-10 items-end">
      <div className="w-full flex gap-4 flex-wrap">
        <SelectBox
          value={selectedCategory}
          options={categoryOptions}
          placeholder="카테고리"
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
        />
        <div className="flex-grow">
          <TextInput
          placeholder="제목으로 게시글을 검새해보세요."
          icon={<Search size={24} />}
        ></TextInput>
        </div>
        <Button width="min-w-20" className="w-full lg:w-auto">검색</Button>
      </div>
      <PostSearchDropdown />
    </div>
  );
}
