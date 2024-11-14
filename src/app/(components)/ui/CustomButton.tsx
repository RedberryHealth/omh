// components/ui/Button.tsx
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const CustomButton = ({ children, onClick, className = '' }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-contrust-color4 font-bold py-2 px-4 rounded ${className}`}>
      {children}
    </button>
  );
};

export default CustomButton;
