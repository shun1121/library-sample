import { ButtonProps } from './Button.types'

export const getBgColor = (colorKey: ButtonProps['bgColor']) =>
  new Map<ButtonProps['bgColor'], string>([
    ['none', ''],
    ['primary', 'text-white bg-primary hover:bg-primary_hover'],
    ['danger', 'text-white bg-danger hover:bg-danger_hover'],
    ['success', 'text-white bg-success hover:bg-success_hover'],
  ]).get(colorKey)

export const getSize = (sizeKey: ButtonProps['size']) =>
  new Map<ButtonProps['size'], string>([
    ['sm', 'w-32 px-3 py-2 block'],
    ['md', 'w-60 px-4 py-3 block'],
    ['full', 'w-full px-5 py-4 block'],
  ]).get(sizeKey)

export const getTextColor = (textColorKey: ButtonProps['textColor']) =>
  new Map<ButtonProps['textColor'], string>([
    ['primary', 'text-primary'],
    ['danger', 'text-danger'],
    ['success', 'text-success'],
  ]).get(textColorKey)

export const getShape = (shapeKey: ButtonProps['shape']) =>
  new Map<ButtonProps['shape'], string>([
    ['default', 'rounded'],
    ['rounded-md', 'rounded-md'],
    ['rounded-lg', 'rounded-lg'],
    ['rounded-full', 'rounded-full'],
  ]).get(shapeKey)

export const getTextSize = (textSizeKey: ButtonProps['textSize']) =>
  new Map<ButtonProps['textSize'], string>([
    ['sm', 'text-sm'],
    ['md', 'text-base'],
    ['lg', 'text-lg'],
  ]).get(textSizeKey)

export const getOutline = (outlineKey: ButtonProps['outline']) =>
  new Map<ButtonProps['outline'], string>([
    ['none', ''],
    ['outline-primary', 'outline outline-2 outline-primary'],
    ['outline-success', 'outline outline-2 outline-success'],
    ['outline-danger', 'outline outline-2 outline-danger'],
  ]).get(outlineKey)
