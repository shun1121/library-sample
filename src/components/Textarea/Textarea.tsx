import React from "react";
import { getBorderColor } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";

const TextArea: React.FC<TextareaProps> = ({
  placeholder,
  row = 4,
  borderColor
}) => {
  const borderStyle = getBorderColor(borderColor)
  return (
    <textarea
      placeholder={placeholder}
      rows={row}
      className={`${borderStyle}`}
    />
  );
};

export default TextArea;
export type { TextareaProps }