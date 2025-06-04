"use client";

import Profile from "./_components/Profile";
import AppliedScheduleList from "./_components/AppliedScheduleList";
import PastScheduleList from "./_components/PastScheduleList";
import { useAuthStore } from "@/stores/useAuth";
import { useRouter } from "next/navigation";
import { useModalStore } from "@/stores/useModalStore";
import FinishedMeetDetailModal from "../meet/detail/_components/FinishedMeetDetailModal";

export default function Mypage() {
  const { modals, closeModal } = useModalStore();

  // dummyData는 현재는 하드코딩, 나중엔 props나 API로 대체 가능
  const dummyData = {
    title: "걷기 & 대화 모임",
    date: "2025-06-04",
    location: "서울특별시 어쩌구 저쩌구",
    descrlption: "가볍게 함께 걸으며\n건강도 챙기고 이웃과 마음을 나눠요",
    image: null,
    leaderName: "리더 이름",
    leaderImage: null,
  };
  const { currentUser } = useAuthStore();
  console.log(currentUser?.name);
  const router = useRouter();

  const handleBtn = () => {
    router.push("/meet/search");
  };
  return (
    <main className="px-10 py-12 max-w-5xl mx-auto">
      <Profile />
      {currentUser && (
        <div className="w-full flex justify-center mb-6">
          <p className="font-bold text-lg text-center">
            {currentUser?.nickname}님의 신청 모임, 일정들을 확인하세요.
          </p>
        </div>
      )}
      <AppliedScheduleList />
      <div className="w-full flex justify-between items-center mt-16 mb-4">
        <h2 className="text-lg font-bold">지난 모임은 어떠셨나요?</h2>
        <button
          onClick={handleBtn}
          className="text-sm text-orange-500 border border-orange-400 px-3 py-1 rounded hover:bg-orange-50 transition"
        >
          모임활동 더보기
        </button>
      </div>
      <PastScheduleList />
      <FinishedMeetDetailModal
        data={dummyData}
        onClose={() => closeModal("finishedMeetDetail")}
      />
    </main>
  );
}
