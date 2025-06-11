import { Edit, MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ActionMenuProps {
  targetId: number;
  targetType: "post" | "comment";
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

export default function ActionMenu({
  targetId,
  onEdit,
  onDelete,
}: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onEdit?.(targetId);
    setIsOpen(false);
    router.push(`/community/${targetId}/edit`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete?.(targetId);
    setIsOpen(false);
  };

  return (
    <div className="relative text-gray-600">
      <button onClick={handleToggle}>
        <MoreVertical />
      </button>
      {isOpen && (
        <div className="bg-white p-4 flex flex-col gap-4 rounded-md text-sm w-[120px] absolute z-10 border border-gray-400 shadow-md right-5">
          <button
            onClick={handleEdit}
            className="flex gap-2 border-b-2 border-gray-200 pb-4"
          >
            <Edit />
            수정
          </button>
          <button onClick={handleDelete} className="flex gap-2 text-accent-red">
            <Trash />
            삭제
          </button>
        </div>
      )}
    </div>
  );
}
