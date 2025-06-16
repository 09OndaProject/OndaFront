"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

interface Option {
  value?: number;
  label: string;
}

interface DropdownInput {
  value?: number;
  onChange: (value: number | undefined) => void;
  options: Option[];
  placeholder?: string;
}

export default function DropdownInput({
  value,
  onChange,
  options,
  placeholder = "선택하세요.",
}: DropdownInput) {
  const [open, setOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selected = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        className="flex justify-between w-full bg-white border border-gray-300 rounded-md "
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={selected ? "text-black" : "text-gray-600"}>
          {selected ? selected.label : placeholder}
        </span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      {open && (
        <ul className="absolute z-10 w-full bg-white border mt-1 rounded-md shadow-md max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              className={`px-2 py-1 m-1 hover:bg-gray-100 cursor-pointer rounded-md ${value === opt.value ? "bg-gray-100 font-medium" : ""}`}
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
