import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectBoxProps {
  label?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
}

const SelectBox = ({ label, name, value, onChange, options, required }: SelectBoxProps) => (
  <div className="flex flex-col gap-1 font-sans text-main">
    {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary-deep text-main"
    >
      <option value="" disabled>선택해주세요</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  </div>
);

export default SelectBox;
