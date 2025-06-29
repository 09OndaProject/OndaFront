"use client";

import { getMeetDetail } from "@/apis/meetingApi";
import React, { useEffect, useState } from "react";
import { MeetDetail } from "@/types/meetings";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuth";

export default function MeetDetailPage({
  params,
}: {
  params: Promise<{ meet_id: string }>;
}) {
  const [meetId, setMeetId] = useState<string>("");
  const [meetDetail, setMeetDetail] = useState<MeetDetail | null>(null);
  const router = useRouter();
  const { user } = useAuthStore();
  const isLeader = user?.user_id === meetDetail?.leader.id;
  // console.log(meetDetail);
  // console.log(user?.user_id, meetDetail?.leader.id);
  // params를 비동기로 해결
  useEffect(() => {
    params.then((resolvedParams) => {
      setMeetId(resolvedParams.meet_id);
    });
  }, [params]);

  // meetId가 설정된 후 데이터 가져오기
  useEffect(() => {
    if (meetId) {
      async function fetchMeetDetail() {
        const response = await getMeetDetail(Number(meetId));
        console.log(response);
        setMeetDetail(response);
      }
      fetchMeetDetail();
    }
  }, [meetId]);

  if (!meetDetail) return <div className="text-center py-20">로딩 중...</div>;

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-8 text-main">
      {/* 상단 상태 + 제목 */}
      {/* 상단 상태 + 제목 + 수정 버튼 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="text-xs bg-primary-light text-primary-deep font-semibold inline-block px-2 py-1 rounded-md w-fit mb-1">
            모집중
          </div>
          <h1 className="text-2xl font-bold">{meetDetail.title}</h1>
        </div>
        {isLeader && (
          <button
            className="text-sm px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition whitespace-nowrap w-auto self-end md:self-auto"
            onClick={() => router.push(`/meet/${meetDetail.id}/edit`)}
          >
            수정
          </button>
        )}
      </div>
      {/* 이미지 + 리더정보 */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 overflow-hidden bg-gray-100 h-[300px] rounded-xl flex items-center justify-center text-sm text-gray-400">
          <Image
            src={meetDetail.file?.file}
            alt={meetDetail.title}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
              <Image
                src={meetDetail.leader.file.file}
                alt={meetDetail.leader.nickname}
                width={64}
                height={64}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-blue-600 font-semibold">
                인기 리더
              </div>
              <div className="text-lg font-bold">
                {meetDetail.leader.nickname}
              </div>
              <div className="text-sm text-gray-500">
                # 관심분야 : {meetDetail.leader.bio}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            {/* <Calendar size={16} /> */}
            <span>{meetDetail.schedule[0]}</span>
          </div>

          <div className="text-sm text-gray-600">{meetDetail.schedule[1]}</div>

          <div className="border border-gray-300 rounded-md p-2 text-center text-sm font-semibold">
            총 {meetDetail.session_count} 회
          </div>
        </div>
      </div>

      {/* 모집 정보 */}
      <div className="text-red-500 font-semibold">
        자세한 정보를 알려드릴게요
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            모집 마감일
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={meetDetail.application_deadline}
            readOnly
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            신청 인원 / 모집 인원
          </label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={`${meetDetail.current_people} / ${meetDetail.max_people}`}
            readOnly
          />
        </div>

        <div>
          <button className="w-full h-[44px] bg-primary text-white rounded-md">
            나도 이 모임 참여하기!
          </button>
        </div>
      </div>

      {/* 상세 위치 */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">
          상세 모임 위치(주소) 및 장소
        </label>
        <input
          type="text"
          className="w-full border rounded-md p-2"
          value={meetDetail.location}
          readOnly
        />
      </div>

      {/* 모임 소개 */}
      <div>
        <label className="block text-sm text-gray-600 mb-1">모임 소개</label>
        <textarea
          rows={5}
          className="w-full border rounded-md p-2"
          value={meetDetail.description}
          readOnly
        />
      </div>

      {/* 진행 방법 / 난이도 */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">진행 방법</label>
          <div className="border border-primary text-primary rounded-md py-2 text-center">
            {meetDetail.category.category_name}
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">
            디지털 난이도
          </label>
          <div className="border border-primary text-primary rounded-md py-2 text-center">
            {meetDetail.digital_level.display}
          </div>
        </div>
      </div>
    </main>
  );
}
