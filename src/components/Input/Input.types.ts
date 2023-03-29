import { ReactNode } from 'react'

export type InputProps = {
  placeholder?: string
  borderColor?: 'default' | 'primary' | 'success' | 'danger'
  prefix?: ReactNode
  label?: string
}
