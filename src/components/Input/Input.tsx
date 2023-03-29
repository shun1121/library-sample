import React from 'react'
import { getBorderColor, getWidth } from './Input.styles'
import { InputProps } from './Input.types'

const Input = ({ placeholder, borderColor, prefix, suffix, label, width }: InputProps) => {
  const colorStyle = getBorderColor(borderColor)
  const widthStyle = getWidth(width)
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
        className={`${colorStyle} ${widthStyle}`}
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
