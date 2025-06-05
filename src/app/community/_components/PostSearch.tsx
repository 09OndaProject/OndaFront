import Button from "@/components/common/Button";
import SelectBox from "@/components/common/SelectBox";
import TextInput from "@/components/common/TextInput";
import {
  categoryOptions,
  digitalLevelOptions,
  interestOptions,
} from "@/constants/category";
import { Search } from "lucide-react";
import React, { useState } from "react";
import AreaDropdown from "./AreaDropdown";

export default function PostSearch() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState(0);
  // const [selectedArea, setSelectedArea] = useState(0);
  const [selectedDigitalLevel, setSelectedDigitalLevel] = useState(0);


  return (
    <div className="w-full flex gap-4 border-b-2 py-10">
      <div className="w-full flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 justify-end">
          <SelectBox
            value={selectedCategory}
            options={categoryOptions}
            placeholder="카테고리"
            onChange={(e) => setSelectedCategory(Number(e.target.value))}
          />
          <TextInput
            placeholder="제목으로 게시글을 검새해보세요."
            icon={<Search size={24} />}
            className="w-full flex-grow"
          ></TextInput>
          <Button>검색</Button>
        </div>
        <div className="flex flex-wrap gap-4 justify-end">
          <SelectBox
            value={selectedInterest}
            options={interestOptions}
            placeholder="관심사"
            onChange={(e) => setSelectedInterest(Number(e.target.value))}
          />
          <div className="relative">
            <AreaDropdown />
          </div>
          <SelectBox
            value={selectedDigitalLevel}
            options={digitalLevelOptions}
            placeholder="디지털 난이도"
            onChange={(e) => setSelectedDigitalLevel(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
}
