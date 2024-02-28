import React from "react";
import ColoredText from "./coloredText";

interface IHighlightTextProps {
  start?: number;
  end?: number;
  children: string;
}

const HighlightText = ({ start, end, children }: IHighlightTextProps) => {
  if (typeof start !== "number" || typeof end !== "number") {
    // If start or end is not provided, return the original text
    return <>{children}</>;
  }

  // Validate indices
  if (end >= children.length) {
    end = children.length - 1;
  }

  if (start < 0 || start > end) {
    throw new Error("Invalid start or end index");
  }

  const beforeIndex = children.substring(0, start);
  const afterIndex = children.substring(end + 1);

  // Check if there is text before the start index and after the end index
  if (beforeIndex && afterIndex) {
    return (
      <>
        {beforeIndex}
        <ColoredText>{children.substring(start, end + 1)}</ColoredText>
        {afterIndex}
      </>
    );
  } else if (beforeIndex) {
    return (
      <>
        {beforeIndex}
        <ColoredText>{children.substring(start)}</ColoredText>
      </>
    );
  } else if (afterIndex) {
    return (
      <>
        <ColoredText>{children.substring(start, end + 1)}</ColoredText>
        {afterIndex}
      </>
    );
  }

  // If there is no text before or after, return only the selected substring
  return <ColoredText>{children.substring(start, end + 1)}</ColoredText>;
};

export default HighlightText;
