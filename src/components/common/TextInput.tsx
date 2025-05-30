import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput({ label, ...props }: TextInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-gray-700 font-medium">{label}</label>
      <input
        {...props}
        className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
