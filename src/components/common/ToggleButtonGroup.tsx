import React from "react";
import clsx from "clsx";

interface ToggleButtonGroupProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
}

export default function ToggleButtonGroup({
  label,
  options,
  value,
  onChange,
}: ToggleButtonGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm text-gray-700 font-medium">{label}</span>
      <div className="flex gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={clsx(
              "px-4 py-2 rounded-md border text-sm transition",
              value === option.value
                ? "bg-primary-light text-primary-deep border-primary"
                : "bg-white text-gray-600 border-gray-300"
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
