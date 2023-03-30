import React from "react";
import { TextAreaProps } from "./Textarea.types";

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  row = 4,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      rows={row}
    />
  );
};

export default TextArea;