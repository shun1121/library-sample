import React from 'react';
import './Button.css';

interface ButtonProp {
  label: string;
}

const Button = (props: ButtonProp) => {
  return <button>{props.label}</button>;
};

export default Button;
export type { ButtonProp };
