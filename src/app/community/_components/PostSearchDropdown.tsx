import { Settings } from "lucide-react";
import React, { useState } from "react";
import AreaDropdown from "./AreaDropdown";
import SelectBox from "@/components/common/SelectBox";
import { digitalLevelOptions, interestOptions } from "@/constants/category";
import { useAppSearchParams } from "@/stores/useAppSearchParams";

export default function PostSearchDropdown() {
  const [showDetail, setShwoDetail] = useState(false);
  const { searchParams, updateParams } = useAppSearchParams();

  const handleToggle = () => setShwoDetail((prev) => !prev);

  return (
    <div className="w-full flex items-center gap-4 h-10 mb-4">
        <button onClick={handleToggle} className="flex gap-2 py-1 rounded-full bg-gray-200 px-4 hover:bg-gray-400">
        상세조회
        <Settings />
      </button>
      {showDetail && (
        <div className="flex flex-wrap gap-4 flex-grow">
          <SelectBox
            value={searchParams.interest}
            options={interestOptions}
            placeholder="관심사"
            onChange={(e) => updateParams("interest", Number(e.target.value))}
          />
          <AreaDropdown />
          <SelectBox
            value={searchParams.digitalLevel}
            options={digitalLevelOptions}
            placeholder="디지털 난이도"
            onChange={(e) => updateParams("digitalLevel", Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
}
