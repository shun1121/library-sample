import React  from "react";
import { ButtonProps } from "./Button.types";
import { getColor, getOutline, getShape, getSize, getTextSize } from "./Button.styles";

const Button = ({ color, text, size, shape, textSize, outline, suffix, ...props}: ButtonProps) => {
  const colorStyle = getColor(color)
  const sizeStyle = getSize(size)
  const shapeStyle = getShape(shape)
  const textSizeStyle = getTextSize(textSize)
  const outlineStyle = getOutline(outline)
  
  return (
    <button
      className={`${colorStyle} ${sizeStyle} ${shapeStyle} ${textSizeStyle} ${outlineStyle}`}
      {...props}
    >
      {suffix ? (<span>{text}{suffix}</span>):<span>{text}</span>}
    </button>
  );
};

export default Button;
export type { ButtonProps };
