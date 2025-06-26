"use client";

import React, { useEffect, useState } from "react";
import DropdownInput from "@/app/community/_components/DropdownInput";
import {
  getAreaOptions,
  getDigitalOptions,
  getInterestOptions,
} from "@/apis/options";
import { Option } from "@/types/post";
import { MeetingFilter } from "@/types/meetings";
import AreaDropdown from "@/app/community/_components/AreaDropdown";
import { Area } from "@/types/options";

interface MeetFilterBarProps {
  filters: MeetingFilter;
  onChange: (filters: MeetingFilter) => void;
}

export default function MeetFilterBar({
  filters,
  onChange,
}: MeetFilterBarProps) {
  const [areaOptions, setAreaOptions] = useState<Area[]>([]);
  const [interestOptions, setInterestOptions] = useState<Option[]>([]);
  const [digitalLevelOptions, setDigitalLevelOptions] = useState<Option[]>([]);

  const handleChange = (key: keyof MeetingFilter, value: Option) => {
    onChange({ ...filters, [key]: value });
  };

  useEffect(() => {
    const fetchOptions = async () => {
      const areaRes = await getAreaOptions();
      const interestRes = await getInterestOptions();
      const digitalRes = await getDigitalOptions();

      setAreaOptions(areaRes);

      setInterestOptions(
        interestRes.results.map((i: { id: number; interest_name: string }) => ({
          id: i.id,
          name: i.interest_name,
        }))
      );

      setDigitalLevelOptions(
        digitalRes.results.map((d: { id: number; description: string }) => ({
          id: d.id,
          name: d.description,
        }))
      );
    };

    fetchOptions();
  }, []);

  return (
    <div className="flex flex-wrap w-full md:flex-nowrap items-center gap-3 mb-6">
      <DropdownInput
        value={filters.interest}
        onChange={(val) => handleChange("interest", val)}
        options={interestOptions}
        placeholder="관심사"
        className="min-w-[160px] w-[250px]"
      />
      <AreaDropdown
        value={filters.area}
        onChange={(val) => onChange({ ...filters, area: val })}
        options={areaOptions}
        placeholder="지역"
        className="flex-grow"
      />
      <DropdownInput
        value={filters.digitalLevel}
        onChange={(val) => handleChange("digitalLevel", val)}
        options={digitalLevelOptions}
        placeholder="디지털 난이도"
        className="min-w-[160px] w-[250px]"
      />
      <button
        type="submit"
        className="bg-primary text-white text-sm rounded-md px-4 h-[44px] min-w-[72px] hover:bg-primary-light active:bg-primary-deep"
      >
        조회
      </button>
    </div>
  );
}
