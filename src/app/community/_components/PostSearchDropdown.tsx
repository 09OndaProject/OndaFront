import { Settings } from "lucide-react";
import React, { useState } from "react";
import AreaDropdown from "./AreaDropdown";
import SelectBox from "@/components/common/SelectBox";
import { digitalLevelOptions, interestOptions } from "@/constants/category";

export default function PostSearchDropdown() {
  const [showDetail, setShwoDetail] = useState(false);

  const [selectedInterest, setSelectedInterest] = useState(0);
  // const [selectedArea, setSelectedArea] = useState(0);
  const [selectedDigitalLevel, setSelectedDigitalLevel] = useState(0);

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
            value={selectedInterest}
            options={interestOptions}
            placeholder="관심사"
            onChange={(e) => setSelectedInterest(Number(e.target.value))}
          />
          <AreaDropdown />
          <SelectBox
            value={selectedDigitalLevel}
            options={digitalLevelOptions}
            placeholder="디지털 난이도"
            onChange={(e) => setSelectedDigitalLevel(Number(e.target.value))}
          />
        </div>
      )}
    </div>
  );
}
