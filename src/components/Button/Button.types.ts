import type { ReactNode } from 'react'

export interface ButtonProps {
  text: string | ReactNode
  color: 'none' | 'primary' | 'success' | 'danger'
  size?: 'sm' | 'md' | 'full'
  textSize?: 'sm' | 'md' | 'lg'
  shape?: 'default' | 'rounded-md' | 'rounded-lg' | 'rounded-full'
  outline?: 'none' | 'outline-primary' | 'outline-success' | 'outline-danger'
  suffix?: string | ReactNode
  onClick?: () => void
}
