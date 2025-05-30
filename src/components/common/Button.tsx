import React from "react";

interface CommonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CommonButton = ({ children, className = "", ...props }: CommonButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default CommonButton;