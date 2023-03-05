import type { ReactNode } from "react";

export interface ButtonProps {
  text: string | ReactNode;
  color:
    | 'none'
    | 'primary'
    | 'success'
    | 'danger';
  size?: 'none' | 'md' | 'lg'
  textSize?: 'none' | 'center' | 'lg'
  textAlign?: 'left' | 'center' | 'right'
  shape?: 'none' | 'rounded' | 'square'
  onClick?: () => void
}