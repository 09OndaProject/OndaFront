import Modal from "@/components/common/Modal";
import { useModalStore } from "@/stores/useModalStore";
import { useRouter } from "next/navigation";
import React from "react";

export function PostSuccessModal() {
  const router = useRouter();
  const { modals, modalData, closeModal } = useModalStore();

  const isOpen = modals["PostSuccessModal"];
  const postId = modalData["PostSuccessModal"] as number | undefined;

  if (!isOpen || !postId) return null;

  return (
    <Modal modalKey={"PostSuccessModal"}>
      <p>게시글이 성공적으로 등록되었습니다.</p>
      <div className="flex gap-4">
        <button
          onClick={() => {
            closeModal("PostSuccessModal");
            router.push(`/community/${postId}`);
          }}
        >
          게시글 보러가기
        </button>
        <button
          onClick={() => {
            closeModal("PostSuccessModal");
            router.push("/community");
          }}
        >
          목록으로 가기
        </button>
      </div>
    </Modal>
  );
}

export function PostFailModal() {
  const { modals, modalData, closeModal } = useModalStore();
  const router = useRouter();

  const isOpen = modals["PostFailModal"];
  const message = modalData["PostFailModal"] as string;

  if (!isOpen) return null;

  return (
    <Modal modalKey="PostFailModal">
      <p className="mb-4 text-center whitespace-pre-line">
        {message ?? "등록에 실패했습니다.\n다시 시도해주세요."}
      </p>
      <button
        onClick={() => {
          closeModal("PostFailModal");
          router.back();
        }}
      >
        확인
      </button>
    </Modal>
  );
}
