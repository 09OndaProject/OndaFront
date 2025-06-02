import React from "react";
import { GatheringCard } from "./GatheringCard";
import { dummyGatherings } from "@/datas/gatherings";

export default function GatheringListSection() {
  return (
    <section className="py-16 w-full">
      <div>
        <h2 className="text-2xl font-bold mb-10 mx-4 md:mx-[160px]">
          최근 개설된 모임
        </h2>ㅌㅈ
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 overflow-auto">
          {dummyGatherings.map((item, index) => (
            <GatheringCard
              key={index}
              title={item.title}
              interest={item.interest}
              date={item.date}
              time={item.time}
              location={item.location}
              image={item.image}
            />
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
