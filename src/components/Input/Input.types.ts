import { ReactNode } from 'react'

export type InputProps = {
  placeholder?: string
  borderColor?: 'default' | 'primary' | 'success' | 'danger'
  prefix?: ReactNode
  suffix?: ReactNode
  label?: string
  width?: 'sm' | 'md' | 'lg'
}

