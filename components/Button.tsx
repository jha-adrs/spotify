"use client"
import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
        <button
            ref={ref}
            className={
                twMerge(
                    ` rounded-full bg-green-500
                    border border-transparent px-3 py-3
                    disabled:cursor-not-allowed disabled:opacity-50
                    hover:opacity-75 text-black font-bold
                     transition`,
                    className
                )
            }
            disabled={disabled}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
})

Button.displayName = 'Button';
export default Button;