import { InputProps } from './Input.types'

export const getBorderColor = (colorKey: InputProps['borderColor']) =>
  new Map<InputProps['borderColor'], string>([
    ['default', 'border-gray border-2'],
  ]).get(colorKey)

export const getWidth = (widthKey: InputProps['width']) =>
  new Map<InputProps['width'], string>([
    ['sm', 'w-32 px-3 block'],
    ['md', 'w-60 px-4 py-1 block'],
    ['lg', 'w-full px-5 py-2 block'],
  ]).get(widthKey)