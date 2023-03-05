import React from "react";

interface ButtonProps {
  label: string;
  vividness?: "light" | "default";
  size?: "small" | "middle";
}

const Button = (props: ButtonProps) => {
  return (
    <button
      className={`
        ${
          props.vividness === "light"
            ? `bg-red-light`
            : "bg-red-default"
        }
        ${props.size === "middle" ? "px-5 py-1" : "px-3 py-1 text-sm"}
      `}
    >
      {props.label}
    </button>
  );
};

export default Button;
export type { ButtonProps };
