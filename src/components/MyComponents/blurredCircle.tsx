import React from "react";

interface IBlurredCircleProps {
  top?: string;
  left?: string;
  bottom?: string;
  right?: string;
}

const BlurredCircle = ({ top, bottom, left, right }: IBlurredCircleProps) => {
  const circleStyle: React.CSSProperties = {
    background:
      "linear-gradient(175.6deg, rgba(249, 77, 80, 0.3) 34.95%, rgba(237, 200, 212, 0.3) 96.43%), #F94D50",
    width: "237px",
    height: "237px",
    borderRadius: "50%",
    position: "absolute",
    top: `${top}`,
    bottom: `${bottom}`,
    left: `${left}`,
    right: `${right}`,
    filter: "blur(150px)",
    zIndex: -1,
  };

  return <div style={circleStyle}></div>;
};

export default BlurredCircle;
