import AreaSelector from "@/components/common/AreaSelector";
import Button from "@/components/common/Button";
import SelectBox from "@/components/common/SelectBox";
import TextInput from "@/components/common/TextInput";
import {
  categoryOptions,
  digitalLevelOptions,
  interestOptions,
} from "@/constants/category";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function PostSearch() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedInterest, setSelectedInterest] = useState(0);
  const [selectedArea, setSelectedArea] = useState(0);
  const [selectedDigitalLevel, setSelectedDigitalLevel] = useState(0);

  const [showAreaSelector, setShowAreaSelector] = useState(false);

  const handleToggleAreaSelector = () => {
    setShowAreaSelector((prev) => !prev);
  };

  useEffect(() => {})

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
            <button
              type="button"
              onClick={handleToggleAreaSelector}
              className="flex items-center border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
            >
              지역 선택
              {showAreaSelector ? (
                <ChevronUp className="ml-2 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-2 w-4 h-4" />
              )}
            </button>

            {showAreaSelector && (
              <div className="absolute right-0 z-20 mt-2 w-[400px]">
                <AreaSelector />
              </div>
            )}
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
