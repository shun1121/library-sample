import React from 'react'
import { getBorderColor, getShape, getWidth } from './Input.styles'
import { InputProps } from './Input.types'

const Input = ({ placeholder, borderColor, prefix, suffix, label, width, shape }: InputProps) => {
  const colorStyle = getBorderColor(borderColor)
  const widthStyle = getWidth(width)
  const shapeStyle = getShape(shape)
  const prefixStyle = 'flex items-center justify-center'
  return (
    <div className="relative">
      {label && <span className="block text-[12px]">{label}</span>}
      {prefix && (
        <span className="absolute top-1/2 left-1 transform -translate-y-1/2">
          {prefix}
        </span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={`${colorStyle} ${widthStyle} ${shapeStyle}`}
        prefix={prefixStyle}
      />
      {suffix && (
        <span className="absolute top-1/2 right-1 transform -translate-y-1/2">
          {suffix}
        </span>
      )}
    </div>
  )
}

export default Input
