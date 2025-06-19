"use client";

import { useModalStore } from "@/stores/useModalStore";
import FinishedMeetDetailModal from "../meet/detail/_components/FinishedMeetDetailModal";
import ReviewWriteModal from "../meet/review/_components/ReviewWriteModal";
import Link from "next/link";

interface MeeringStatusButtonsProps {
  status: "모집중" | "모집 마감";
  onClickApply?: () => void;
  mode?: "default" | "past";
  meet_id?: number;
}

export default function MeeringStatusButtons({
  status,
  onClickApply,
  mode = "default",
  meet_id,
}: MeeringStatusButtonsProps) {
  const { openModal, closeModal, modals, modalData } = useModalStore();

  

  const modalKey = mode === "past" ? "finishedMeetDetail" : "meetDetail";
  const openhandler = () => openModal(modalKey);
  const closehandler = () => closeModal(modalKey);

  return (
    <div>
      <div className="flex gap-2">
        {mode === "past" ? (
          <>
            <button
              className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
              onClick={handleReviewClick}
            >
              후기작성
            </button>
            <button
              className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-50 transition"
              onClick={openhandler}
            >
              상세보기
            </button>
          </>
        ) : (
          <>
            {status === "모집중" ? (
              <button
                className="flex-1 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
                onClick={onClickApply}
              >
                신청하기
              </button>
            ) : (
              <button
                className="flex-1 bg-gray-300 text-white py-2 rounded-md cursor-not-allowed"
                disabled
              >
                모집 마감
              </button>
            )}

            <Link href={`/meet/${meet_id}`}>
              <button className="flex-1 border border-orange-500 text-orange-500 py-2 rounded-md hover:bg-orange-50 transition">
                상세 보기
              </button>
            </Link>
          </>
        )}
      </div>

      {/* 과거 모임 상세 모달 */}
      {mode === "past" && modals["finishedMeetDetail"] && (
        <FinishedMeetDetailModal data={modalData["finishedMeetDetail"] as any} onClose={closehandler} />
      )}

      {/* 후기 작성 모달 */}
      {modals["reviewWrite"] && modalData["reviewWrite"] && (
        <ReviewWriteModal
          modalKey="reviewWrite"
          meetId={(modalData["reviewWrite"] as { meet_id: number }).meet_id}
          onSubmit={(rating, content) => {
            console.log("후기 제출", rating, content);
          }}
        />
      )}
    </div>
  );
}
