"use client";

import React, { useState } from "react";
import MeetFilterBar from "@/app/meet/search/_components/MeetFilterBar";
import MeetCardList from "@/app/meet/search/_components/MeetCardList";
import DropdownInput from "@/app/community/_components/DropdownInput";
import TextInput from "@/components/common/TextInput";
import { Search } from "lucide-react";
import MeetFilter from "./_components/MeetFilter";

export default function MeetSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    category: 0,
    area: 0,
    digitalLevel: 0,
  });

  const TAG_OPTION = [
    { id: 1, name: "모집중" },
    { id: 2, name: "마감" },
    { id: 3, name: "완료" },
  ];

  const [selectedTag, setSelectedTag] = useState({id: 0, name: "모집 상태"});

  return (
    <main className="flex flex-col items-center w-full my-20 max-w-[1440px] px-4 md:px-[160px] mx-auto">
      <div className="w-full flex justify-between">
        <h1 className="text-xl font-bold text-main mb-6">모임 검색</h1>
      </div>

      <div className="w-full flex flex-col gap-4 mt-10 items-end">
        <div className="w-full flex gap-4 flex-wrap">
          <DropdownInput
            value={selectedTag}
            onChange={(e) =>
              setSelectedTag(e)
            }
            options={TAG_OPTION}
            placeholder="카테고리"
            className="min-w-[150px] w-auto"
          />
          <div className="flex-grow">
            <TextInput
              placeholder="제목으로 게시글을 검색해보세요."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={24} />}
            ></TextInput>
          </div>
        </div>
      </div>
      <MeetFilter />

      <MeetFilterBar filters={filters} onChange={setFilters} />

      <MeetCardList searchQuery={searchQuery} filters={filters} />
    </main>
  );
}
