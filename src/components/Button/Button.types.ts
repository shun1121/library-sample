import type { ReactNode } from "react";

export interface ButtonProps {
  text: string | ReactNode;
  color:
    | 'none'
    | 'primary'
    | 'success'
    | 'danger';
  size?: 'sm' | 'md' | 'full'
  textSize?: 'sm' | 'md' | 'lg'
  shape?: 'default' | 'md' | 'lg' | 'full'
  onClick?: () => void
}