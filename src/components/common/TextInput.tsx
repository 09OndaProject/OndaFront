import React from "react";
import { CommonInputProps } from "@/types/common";

const TextInput = ({ label, name, value, onChange, placeholder, required }: CommonInputProps) => (
  <div className="flex flex-col gap-1 font-sans text-main">
    {label && <label htmlFor={name} className="text-sm font-medium text-gray-700">{label}</label>}
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-deep text-main placeholder-gray-500"
    />
  </div>
);

export default TextInput;
