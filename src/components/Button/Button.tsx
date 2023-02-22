import React from 'react'

interface ButtonProp {
  label: string;
}

const Button = (props: ButtonProp) => {
  return <button>{props.label}</button>
}

export default Button