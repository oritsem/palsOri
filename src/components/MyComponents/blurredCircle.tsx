import { cn } from "@/lib/utils";
import React from "react";

interface IBlurredCircleProps {
  bottom: number;
  right: number;
}

const BlurredCircle = ({ bottom, right }: IBlurredCircleProps) => {
  const rightPx = `mr-${right}`;
  const bottomPx = `mb-${bottom}`;
  console.log(rightPx, bottomPx);
  return (
    <div className="">
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
    </div>
  );
};

export default BlurredCircle;
