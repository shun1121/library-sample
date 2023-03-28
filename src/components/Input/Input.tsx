import React from 'react'
import { getBorderColor } from './Input.styles'
import { InputProps } from './Input.types'

const Input = ({placeholder, borderColor,prefix}: InputProps) => {
  const colorStyle = getBorderColor(borderColor)
  const prefixStyle = 'flex items-center justify-center'
  return (
    <div className='relative'>
      {prefix && (
        <span className='absolute top-1/2 left-1 transform -translate-y-1/2'>{prefix}</span>
      )}
      <input type="text" placeholder={placeholder} className={colorStyle} prefix={prefixStyle} />
    </div>
  )
}

export default Input