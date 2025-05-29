import { MouseEventHandler } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    isDisabled?: boolean;
    className: string;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    error?: string;
    clasName: string;
}

export interface ModalProps {
    modalKey: string;
    children: React.ReactNode;
    className?: string;
}