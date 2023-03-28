import { InputProps } from "./Input.types";

export const getBorderColor = (colorKey: InputProps['borderColor']) =>
  new Map<InputProps['borderColor'], string>([
    ['default', 'border-gray border-2'],
    ['primary', 'text-white bg-primary hover:bg-primary_hover'],
    ['danger', 'text-white bg-danger hover:bg-danger_hover'],
    ['success', 'text-white bg-success hover:bg-success_hover'],
  ]).get(colorKey)