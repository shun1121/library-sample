import React from "react";
import { getBorderColor } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";

const TextArea: React.FC<TextareaProps> = ({
  placeholder,
  row,
  borderColor,
  value,
  maxLength,
  onChange
}) => {
  const borderStyle = getBorderColor(borderColor)
  console.log(value)
  console.log(value?.length)
  const remainingCharacters = maxLength !== undefined && value ? maxLength - value.length : undefined;
  return (
    <>
      {maxLength !== undefined && (
        <span>あと{remainingCharacters}文字</span>
      )}
      <textarea
        value={value}
        placeholder={placeholder}
        rows={row}
        className={`${borderStyle}`}
        onChange={onChange}
        maxLength={maxLength}
      />
      {maxLength !== undefined && (
        <div>残り{remainingCharacters}文字</div>
      )}
    </>
  );
};

export default TextArea;
export type { TextareaProps }