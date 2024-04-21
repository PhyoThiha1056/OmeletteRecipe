import {cva, VariantProps} from "class-variance-authority";
import React from "react";

const containerVariants = cva(
    "m-6 p-6 text-color text-xs",
    {
        variants: {
            variant: {
                default: 'bg-white text-xl',
                secondary: 'bg-pink-50 rounded-xl',
            },
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

export interface containerProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof containerVariants> {}

const Container: React.FC<containerProps> = (
    ({className, children, variant,...props}) => {
        return (
            <div
            className={containerVariants({variant, className})} {...props}>
                {children}
            </div>
        )
    }
)

Container.displayName = "Container";
export { Container, containerVariants };