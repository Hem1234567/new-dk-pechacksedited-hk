import React from 'react';
import { cn } from '@/app/lib/utils';

interface CosmicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  glow?: boolean;
  children: React.ReactNode;
}

export function CosmicButton({ 
  variant = 'primary', 
  size = 'md',
  glow = false,
  className,
  children,
  ...props 
}: CosmicButtonProps) {
  const baseStyles = "relative font-electrolize font-medium transition-all duration-300 rounded-lg overflow-hidden group";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 text-white hover:from-purple-500 hover:via-blue-500 hover:to-cyan-400 shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-700 text-white hover:from-gray-700 hover:to-gray-600 border border-gray-600 hover:border-gray-500",
    ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/10",
    outline: "bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:text-purple-200"
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const glowEffect = glow ? "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-400/20 before:via-blue-400/20 before:to-cyan-400/20 before:blur-xl before:-z-10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        glowEffect,
        "hover:scale-105 transform",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-white/20 to-purple-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      )}
    </button>
  );
}
