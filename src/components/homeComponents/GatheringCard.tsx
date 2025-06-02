import React from "react";
import { Calendar, MapPin, Mic } from "lucide-react";
import Image from "next/image";

interface GatheringCardProps {
  title: string;
  interest: string;
  date: string;
  time: string;
  location: string;
  image: string;
}

export const GatheringCard = ({
  title,
  interest,
  date,
  time,
  location,
  image,
}: GatheringCardProps) => {
  return (
    <div className="min-w-[320px] rounded-2xl border border-gray-200 shadow-sm p-5 hover:shadow-md transition-all bg-white">
      <div className="text-sm text-orange-400 font-semibold flex items-center mb-4">
        <Mic size={16} className="mr-1" />
        {interest}
      </div>
      <div className="w-full h-28 bg-gray-200 rounded-md mb-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100%"
        />
      </div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-gray-500 text-sm flex items-center mb-1">
        <Calendar size={16} className="mr-1" />
        {date} (
        {new Date(date).toLocaleDateString("ko-KR", { weekday: "short" })}){" "}
        {time}
      </div>
      <div className="text-gray-500 text-sm flex items-center mb-4">
        <MapPin size={16} className="mr-1" />
        {location}
      </div>
      <div className="flex gap-2">
        <button
          className="flex-1 bg-gray-300 text-white py-2 rounded-md cursor-not-allowed"
          disabled
        >
          모집 마감
        </button>
        <button
          className="flex-1 bg-gray-300 text-white py-2 rounded-md cursor-not-allowed"
          disabled
        >
          상세 보기
        </button>
      </div>
    </div>
  );
};
