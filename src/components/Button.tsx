import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-[#28C76F] text-white hover:bg-[#22a85e] active:bg-[#1d9250] shadow-sm',
    secondary: 'bg-[#0E2A47] text-white hover:bg-[#1a3d5f] active:bg-[#0d2439]',
    outline: 'border-2 border-[#0E2A47] text-[#0E2A47] hover:bg-[#0E2A47] hover:text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
