import React from 'react'
import { getBorderColor } from './Textarea.styles'
import { TextareaProps } from './Textarea.types'

const Textarea = ({
  placeholder,
  row,
  borderColor,
  value,
  maxLength,
  onChange,
  ...props
}: TextareaProps) => {
  const borderStyle = getBorderColor(borderColor)
  const remainingCharacters =
    maxLength !== undefined && value ? maxLength - value.length : maxLength
  return (
    <>
      {maxLength !== undefined && (
        <span className="block">あと{remainingCharacters}文字</span>
      )}
      <textarea
        value={value}
        placeholder={placeholder}
        rows={row}
        className={`${borderStyle}`}
        onChange={onChange}
        maxLength={maxLength}
        {...props}
      />
    </>
  )
}

export default Textarea
export type { TextareaProps }
