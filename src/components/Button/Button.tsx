import React from "react";
// import './Button.css';

interface ButtonProp {
  label: string;
  color?: string;
  size?: "small" | "middle";
}

const Button = (props: ButtonProp) => {
  return (
    <button
      className={`${props.color ? props.color : ""} ${
        props.size === "middle" ? "px-5 py-1" : "px-3 py-1 text-sm"
      }`}
    >
      {props.label}
    </button>
  );
};

export default Button;
export type { ButtonProp };
