import React from 'react';
import { type ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  disabled = false,
  size = 'medium',
  shape = 'rounded-md'
}) => {
  // Base classes
  const baseClasses = 'font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size classes
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  // Shape classes
  const shapeClasses = {
    'rounded-sm': 'rounded',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full'
  };
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 disabled:bg-blue-300',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 disabled:bg-gray-100 disabled:text-gray-400'
  };
  
  const classes = [
    baseClasses,
    sizeClasses[size],
    shapeClasses[shape],
    variantClasses[variant]
  ].join(' ');
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;