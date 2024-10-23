import React, { forwardRef } from "react";
import classNames from "classnames";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    title: string;
    variant?: "primary" | "secondary" | "destructive";
}

const VARIANTS = {
    primary:
        "text-white bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 focus:ring-2 ring-blue-400",
    secondary: "text-black border-gray-300 bg-white hover:bg-gray-200 focus:ring-2 ring-gray-400",
    tertiary: "text-black bg-white-none hover:bg-gray-300 focus:bg-gray-300",
    destructive: "text-white bg-red focus:ring-2 ring-red",
} as const;

const Button = forwardRef<HTMLButtonElement, Props>(
    ({ title, variant = "primary", className, ...props }, ref) => {
        const classes = classNames(
            "border border-transparent relative focus:outline-none rounded-lg disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed outline-none px-5 py-2 font-medium transition duration-300",
            className,
            VARIANTS[variant],
        );

        return (
            <button className={classes} {...props} ref={ref}>
                {title}
            </button>
        );
    },
);

export default Button;
