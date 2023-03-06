import type { ReactNode } from "react";

export interface ButtonProps {
  text: string | ReactNode;
  color:
    | 'primary'
    | 'success'
    | 'danger';
  size?: 'sm' | 'md' | 'full'
  textSize?: 'sm' | 'md' | 'lg'
  shape?: 'default' | 'rounded-md' | 'rounded-lg' | 'rounded-full'
  onClick?: () => void
}