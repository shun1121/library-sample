import { ChangeEvent } from 'react'

export type TextareaProps = {
  placeholder?: string
  row?: number
  borderColor?: string
  value?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  maxLength?: number
}
