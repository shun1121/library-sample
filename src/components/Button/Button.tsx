import React  from "react";
import { ButtonProps } from "./Button.types";
import { getColor, getPositoin, getShape, getSize, getTextSize } from "./Button.styles";

const Button = ({ color, text, size, shape, textSize, textAlign, ...props}: ButtonProps) => {
  const colorStyle = getColor(color)
  const sizeStyle = getSize(size)
  const shapeStyle = getShape(shape)
  const textSizeStyle = getTextSize(textSize)
  const positionStyle = getPositoin(textAlign)
  
  return (
    <button
      className={`${colorStyle} ${sizeStyle} ${shapeStyle} ${textSizeStyle} ${positionStyle}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
export type { ButtonProps };
