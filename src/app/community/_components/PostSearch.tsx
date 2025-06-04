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

export default function PostSearch() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState(0);
  const [selectedArea, setSelectedArea] = useState(0);
  const [selectedDigitalLevel, setSelectedDigitalLevel] = useState(0);

  return (
    <div className="w-full flex flex-col gap-8 border-b-2 py-10">
      <TextInput
        placeholder="제목으로 게시글을 검새해보세요."
        icon={<Search size={24} />}
        className="w-full"
      ></TextInput>
      <div className="flex flex-wrap gap-4 justify-center">
        <SelectBox
          value={selectedCategory}
          options={categoryOptions}
          placeholder="카테고리"
          onChange={(e) => setSelectedCategory(Number(e.target.value))}
        />
        <SelectBox
          value={selectedInterest}
          options={interestOptions}
          placeholder="관심사"
          onChange={(e) => setSelectedInterest(Number(e.target.value))}
          className="flex-grow"
        />
        <SelectBox
          value={selectedArea}
          options={interestOptions}
          placeholder="지역"
          onChange={(e) => setSelectedArea(Number(e.target.value))}
        />
        <SelectBox
          value={selectedDigitalLevel}
          options={digitalLevelOptions}
          placeholder="디지털 난이도"
          onChange={(e) => setSelectedDigitalLevel(Number(e.target.value))}
        />
        <Button>검색</Button>
      </div>
    </div>
  );
}
