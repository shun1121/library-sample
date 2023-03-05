import React  from "react";
import { ButtonProps } from "./Button.types";
import { getColor } from "./Button.styles";

const Button = ({ color, text}: ButtonProps) => {
  const colorStyle = getColor(color)
  return (
    <button
      className={`${colorStyle}`}
    >
      {text}
    </button>
  );
};

export default Button;
export type { ButtonProps };
