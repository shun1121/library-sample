import React  from "react";
import { ButtonProps } from "./Button.types";
import { getColor, getShape, getSize, getTextSize } from "./Button.styles";

const Button = ({ color, text, size, shape, textSize, ...props}: ButtonProps) => {
  const colorStyle = getColor(color)
  const sizeStyle = getSize(size)
  const shapeStyle = getShape(shape)
  const textSizeStyle = getTextSize(textSize)
  
  return (
    <button
      className={`${colorStyle} ${sizeStyle} ${shapeStyle} ${textSizeStyle}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
export type { ButtonProps };
