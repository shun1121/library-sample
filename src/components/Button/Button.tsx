import React from 'react'
import { ButtonProps } from './Button.types'
import {
  getBgColor,
  getOutline,
  getShape,
  getSize,
  getTextColor,
  getTextSize,
} from './Button.styles'

const Button = ({
  bgColor,
  text,
  size,
  textColor,
  shape,
  textSize,
  outline,
  suffix,
  ...props
}: ButtonProps) => {
  const colorStyle = getBgColor(bgColor)
  const sizeStyle = getSize(size)
  const shapeStyle = getShape(shape)
  const textSizeStyle = getTextSize(textSize)
  const outlineStyle = getOutline(outline)
  const suffixStyle = 'flex items-center justify-center'
  const textColorStyle = getTextColor(textColor)

  return suffix ? (
    <button
      className={`${colorStyle} ${sizeStyle} ${shapeStyle} ${textSizeStyle} ${outlineStyle} ${suffixStyle} ${textColorStyle}`}
      {...props}
    >
      <span>{text}</span>
      <span className="ml-1">{suffix}</span>
    </button>
  ) : (
    <button
      className={`${colorStyle} ${sizeStyle} ${shapeStyle} ${textSizeStyle} ${outlineStyle} ${suffixStyle} ${textColorStyle}`}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
export type { ButtonProps }
