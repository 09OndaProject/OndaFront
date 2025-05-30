import React from "react";

interface Option {
  label: string;
  value: string;
}

interface SelectBoxProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

export default function SelectBox({ label, options, ...props }: SelectBoxProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-700 font-medium">{label}</label>
      <select
        {...props}
        className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">선택하세요</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
