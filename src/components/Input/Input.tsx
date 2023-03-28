import React from 'react'
import { getBorderColor } from './Input.styles'
import { InputProps } from './Input.types'

const Input = ({placeholder, borderColor}: InputProps) => {
  const colorStyle = getBorderColor(borderColor)
  return (
    <input type="text" placeholder={placeholder} className={colorStyle} />
  )
}

export default Input