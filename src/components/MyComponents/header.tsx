// components/Header.tsx
import React from "react";
import Image from "next/image";
import BlurredCircle from "./blurredCircle";
import ColoredText from "./coloredText";

const title = "מחפש מאמן כושר אישי שיעזור לך להתחיל להתאמן?";
const text = "מתקשה לשפר את הבריאות ולהוריד במשקל לבדך?";

interface IHeaderProps {
  logo: string;
  images: string[];
}

const Header = ({ logo, images }: IHeaderProps) => {
  return (
    <div className="px-4 relative h-auto">
      <div className="max-w-4xl mx-auto relative">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image src={logo} alt="Logo" width={180} height={142.57} />
        </div>
        {/* Title */}
        <h1 className="font-bold text-4xl leading-60 text-center mb-4">
          <span>{title}</span>
        </h1>
        {/* Text */}
        <p className="font-semibold text-lg leading-48 text-center mb-8">
          <span>{text} </span>
          <ColoredText>הגעת למקום הנכון!</ColoredText>
        </p>
        <div className="h-10"> </div>
        {/* Images */}
        <div className="flex justify-center">
          {images.map((imageUrl, index) => (
            <div key={index} className="mx-4">
              <Image
                src={imageUrl}
                alt={`Image ${index + 1}`}
                width={376}
                height={376}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <BlurredCircle bottom="10px" right="410px" />
        <BlurredCircle bottom="200px" right="0px" />
      </div>
      <div className="h-10"> </div>
    </div>
  );
};

export default Header;