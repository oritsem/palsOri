// components/Footer.tsx
import React from "react";
import Image from "next/image";
import BlurredCircle from "./blurredCircle";
import ColoredText from "./coloredText";
import * as Images from "@/images";

type TitledImage = { title: string; image: string };

const title = "פאלס מקשרת אותך למקצוענים באזורך";
const footer_images = [
  { image: Images.people.src, title: "מספר הצעות" },
  { image: Images.location.src, title: "מבוסס מיקום" },
  { image: Images.clock.src, title: "אוטומטי ומיידי" },
];

const Footer = () => {
  return (
    <div className="px-4 relative">
      <div className="h-10"> </div>
      <div className="max-w-4xl mx-auto relative">
        {/* Title */}
        <h1 className="font-bold text-4xl leading-60 text-center mb-4">
          <span>{title} </span>
          <ColoredText>באפס מאמץ</ColoredText>
        </h1>
        {/* Images */}
        <div className="flex justify-center items-center">
          {footer_images.map((titledImage, index) => (
            <div key={index} className="mx-4 px-4">
              <div className="text-xl font-semibold leading-12 h-12 top-80 left-32 text-center mb-4">
                {titledImage.title}
              </div>

              <Image
                src={titledImage.image}
                alt={`Image ${index + 1}`}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
      </div>
      <BlurredCircle bottom="20px" right="150px" />
    </div>
  );
};

export default Footer;
