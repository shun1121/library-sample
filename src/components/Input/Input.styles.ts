import { InputProps } from './Input.types'

export const getBorderColor = (colorKey: InputProps['borderColor']) =>
  new Map<InputProps['borderColor'], string>([
    ['default', 'border-gray border-2'],
  ]).get(colorKey)

export const getWidth = (widthKey: InputProps['width']) =>
  new Map<InputProps['width'], string>([
    ['sm', 'w-32 px-3 block'],
    ['md', 'w-60 px-4 block'],
    ['lg', 'w-full px-5 block'],
  ]).get(widthKey)

export const getShape = (shapeKey: InputProps['shape']) =>
  new Map<InputProps['shape'], string>([
    ['default', 'rounded'],
    ['rounded-md', 'rounded-md'],
    ['rounded-lg', 'rounded-lg'],
    ['rounded-full', 'rounded-full'],
  ]).get(shapeKey)
