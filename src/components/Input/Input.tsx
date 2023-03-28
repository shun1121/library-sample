import React from 'react'

export type InputProps = {
  placeholder?: string
  borderColor?: 'default' | 'primary' | 'success' | 'danger'
}

export const getBorderColor = (colorKey: InputProps['borderColor']) =>
  new Map<InputProps['borderColor'], string>([
    ['default', 'border-gray border-2'],
    ['primary', 'text-white bg-primary hover:bg-primary_hover'],
    ['danger', 'text-white bg-danger hover:bg-danger_hover'],
    ['success', 'text-white bg-success hover:bg-success_hover'],
  ]).get(colorKey)

const Input = ({placeholder, borderColor}: InputProps) => {
  const colorStyle = getBorderColor(borderColor)
  return (
    <input type="text" placeholder={placeholder} className={colorStyle} />
  )
}

export default Input