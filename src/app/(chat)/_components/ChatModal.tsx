"use client";
import { useModalStore } from "@/stores/useModalStore";
import { X } from "lucide-react";
import ChatRoom from "../[roomId]/ChatRoom";

export default function ChatModal() {
  const { modals, modalData, closeModal } = useModalStore();

  // modal이 안 열려 있으면 아예 렌더링하지 않음
  if (!modals["chat"]) return null;

  const chatData = modalData["chat"] as
    | { roomId: number; title: string }
    | undefined;
  if (!chatData) return null;

  const { roomId, title } = chatData;

  const token = localStorage.getItem("accessToken");
  console.log("토큰:", token);

  if (!token) {
    alert("로그인이 필요합니다.");
    closeModal("chat");
    return null;
  }

  return (
    <div className="fixed z-50 right-10 bottom-10">
      <div className="w-[400px] h-[520px] bg-white rounded-lg shadow-lg relative">
        <div className="flex flex-1 justify-between items-center bg-primary-deep p-4 rounded-t-lg">
          <p className="text-white font-semibold text-xs">{title} 채팅방</p>
          <button onClick={() => closeModal("chat")}>
            <X className="text-white " />
          </button>
        </div>
        {/* props로 token 넘겨줌 */}
        <ChatRoom roomId={roomId} token={token} />
      </div>
    </div>
  );
}
