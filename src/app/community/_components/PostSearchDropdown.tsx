import { Search } from "lucide-react";
import React, { useState } from "react";
import { useAppSearchParams } from "@/stores/useAppSearchParams";
import { OptionResponse } from "@/apis/options";
import DropdownInput from "./DropdownInput";
import AreaDropdown from "./AreaDropdown";

interface PostSearchDropdownProps {
  options: OptionResponse | null;
}

export default function PostSearchDropdown({
  options,
}: PostSearchDropdownProps) {
  const [showDetail, setShowDetail] = useState(false);
  const { searchParams, updateParams, resetParams } = useAppSearchParams();

  const handleToggle = () => setShowDetail((prev) => !prev);

  const interestOptions =
    options?.interests?.map((opt) => ({
      value: opt.id,
      label: opt.interest_name,
    })) ?? [];

  const areaOptions = (options?.areas ?? []).map((opt) => ({
    id: opt.id,
    area_name: opt.area_name,
    children:
      opt.children?.map((child) => ({
        id: child.id,
        area_name: child.area_name,
      })) ?? [],
  }));

  return (
    <div className="w-full flex flex-col gap-4 mb-4">
      {/* 옵션 영역 */}
      {showDetail && (
        <div className="flex flex-wrap gap-4">
          <DropdownInput
            value={searchParams.interest}
            onChange={(val) => updateParams("interest", val)}
            options={interestOptions}
            placeholder="관심사"
            className="w-[250px]"
          />
          <AreaDropdown 
            areaOptions={areaOptions}
            selected={searchParams.area}
            onChange={(value) => updateParams("area", value)}
            placeholder="지역"
            className="flex-grow"
          />

        </div>
      )}
      {/* 버튼 영역 */}
      <div className="flex gap-4">
        <button
          onClick={handleToggle}
          className="flex gap-2 py-1 rounded-full bg-gray-200 px-4 hover:bg-gray-400 text-gray-700"
        >
          상세검색
          <Search />
        </button>
        <button
          onClick={resetParams}
          className="flex gap-2 py-1 rounded-full bg-gray-200 px-4 hover:bg-gray-400 text-gray-700"
        >
          초기화
        </button>
      </div>
    </div>
  );
}
