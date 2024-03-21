import { cn } from "@/lib/utils";
import React from "react";

interface IBlurredCircleProps {
  bottom: number;
  right: number;
}

const BlurredCircle = ({ bottom, right }: IBlurredCircleProps) => {
  const rightPx = `mr-${right}`;
  const bottomPx = `mb-${bottom}`;
  return (
    <div
      id="test-blured"
      className={cn(
        `absolute 
          w-60 
          h-60 
          rounded-full 
          bg-red-500 
          filter 
          blur-[150px] 
          z-[-1]`,
        rightPx,
        bottomPx
      )}
    ></div>
  );
};

export default BlurredCircle;
