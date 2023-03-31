import React from 'react'
import { getBorderColor } from './Textarea.styles'
import { TextareaProps } from './Textarea.types'

const TextArea: React.FC<TextareaProps> = ({
  placeholder,
  row,
  borderColor,
  value,
  maxLength,
  onChange,
}) => {
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
      />
    </>
  )
}

export default TextArea
export type { TextareaProps }
