import React from "react";
import { getBorderColor } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";

const TextArea: React.FC<TextareaProps> = ({
  placeholder,
  row,
  borderColor,
  value,
  onChange
}) => {
  const borderStyle = getBorderColor(borderColor)
  console.log(value)
  console.log(value?.length)
  return (
    <>
      <textarea
        value={value}
        placeholder={placeholder}
        rows={row}
        className={`${borderStyle}`}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
export type { TextareaProps }