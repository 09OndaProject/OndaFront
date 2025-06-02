import React from "react";
import { dummyMeetings } from "@/datas/meetings";
import { MeetingCard } from "./MeetingCard";

export default function MeetingListSection() {
  return (
    <section className="py-16 w-full">
      <div>
        <h2 className="text-2xl font-bold mb-10 mx-4 md:mx-[160px]">
          최근 개설된 모임
        </h2>
        <div>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 overflow-auto p-8 md:px-[160px]">
            {dummyMeetings.map((item) => (
              <MeetingCard key={item.meet_id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
