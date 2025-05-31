"use client";
import React from "react";
import { clsx } from "clsx";
import { ButtonProps } from "@/types/common";

const colorMap = {
  primary: {
    fill: "bg-primary text-white hover:bg-primary-light active:bg-primary-deep",
    outline:
      "bg-transparent border border-2 border-primary text-primary-deep hover:bg-transparent active:text-white active:bg-primary-deep",
  },
  gray: {
    fill: "bg-gray-500 text-white hover:bg-gray-600 active:bg-gray-700",
    outline:
      "bg-transparent border border-2 border-gray-500 text-gray-600 hover:bg-transparent active:text-white active:bg-gray-700",
  },
  accent: {
    fill: "bg-accent-main text-white hover:opacity-80 active:opacity-100",
    outline:
      "bg-transparent border border-2 border-accent-main text-accent-main hover:bg-transparent active:text-white active:bg-accent-main",
  },
  red: {
    fill: "bg-accent-red text-white hover:bg-red-600 active:bg-red-700",
    outline:
      "bg-transparent border border-red-500 text-red-500 hover:bg-transparent active:bg-red-600",
  },
};

const Button = ({
  className = "",
  color = "primary",
  variant = "fill",
  width = "w-[160px]",
  height = "h-[48px]",
  children,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyle =
    "rounded-md font-medium flex justify-center items-center text-md px-4";
  const variantStyle = colorMap[color][variant];
  const sizeStyle = `${width} ${height}`;

  return (
    <button
      className={clsx(baseStyle, variantStyle, sizeStyle, className)}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
