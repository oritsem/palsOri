// components/ColoredText.tsx
import React, { ReactNode } from "react";

interface IColoredTextProps {
  children: ReactNode;
}

const ColoredText = ({ children }: IColoredTextProps) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-300">
      {children}
    </span>
  );
};

export default ColoredText;
