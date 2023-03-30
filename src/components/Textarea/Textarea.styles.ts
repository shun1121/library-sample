import { TextareaProps } from "./Textarea.types";

export const getBorderColor = (colorKey: TextareaProps['borderColor']) =>
  new Map<TextareaProps['borderColor'], string>([
    ['default', 'border-gray border-2'],
  ]).get(colorKey)