import React from "react";

interface IBlurredCircleProps {
  bottom: string;
  right: string;
}

const BlurredCircle = ({ bottom, right }: IBlurredCircleProps) => {
  return (
    <div
      className={`
        absolute 
        w-60 
        h-60 
        rounded-full 
        bg-red-500 
        filter 
        blur-[150px] 
        z-[-1] 
        ${right && `right-${right}`}
        ${bottom && `bottom-${bottom}`}
      `}
      style={{ bottom, right }} // TODO: Replace css with Tailwind className
    ></div>
  );
};

export default BlurredCircle;
