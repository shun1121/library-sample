import React  from "react";
import { ButtonProps } from "./Button.types";
import { getColor, getShape, getSize } from "./Button.styles";

const Button = ({ color, text, size, shape, ...props}: ButtonProps) => {
  const colorStyle = getColor(color)
  const sizeStyle = getSize(size)
  const shapeStyle = getShape(shape)
  
  return (
    <button
      className={`${colorStyle} ${sizeStyle} ${shapeStyle}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
export type { ButtonProps };
