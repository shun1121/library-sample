import { ReactNode } from 'react'

export type InputProps = {
  placeholder?: string
  borderColor?: 'default' | 'primary' | 'success' | 'danger'
  prefix?: ReactNode
  suffix?: ReactNode
  label?: string
  width?: 'sm' | 'md' | 'lg'
  shape?: 'default' | 'rounded-md' | 'rounded-lg' | 'rounded-full'
}

