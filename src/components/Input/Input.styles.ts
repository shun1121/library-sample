import { InputProps } from './Input.types'

export const getBorderColor = (colorKey: InputProps['borderColor']) =>
  new Map<InputProps['borderColor'], string>([
    ['default', 'border-gray border-2'],
  ]).get(colorKey)
