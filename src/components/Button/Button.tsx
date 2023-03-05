import React  from "react";
import { ButtonProps } from "./Button.types";
import { getColor, getSize } from "./Button.styles";

const Button = ({ color, text, size, ...props}: ButtonProps) => {
  const colorStyle = getColor(color)
  const sizeStyle = getSize(size)
  
  return (
    <button
      className={`${colorStyle} ${sizeStyle}`}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
export type { ButtonProps };
