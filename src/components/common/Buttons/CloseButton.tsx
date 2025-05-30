import { IconButtonProps } from "@/types/common";
import { X } from "lucide-react";
import React from "react";

export default function CloseButton({ onClick, size=32, className }: IconButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      <X size={size} />
    </button>
  );
}
