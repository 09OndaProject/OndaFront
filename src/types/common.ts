export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color?: "primary" | "gray" | "red" | "accent";
  variant?: "fill" | "outline";
  width?: string;
  height?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
  clasName: string;
}

export interface ModalProps {
  modalKey: string;
  children: React.ReactNode;
  className?: string;
}

export interface CommonInputProps {
  label?: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  placeholder?: string;
  required?: boolean;
}

export interface IconButtonProps {
    onClick: () => void;
    size: number;
    className?: string;
}