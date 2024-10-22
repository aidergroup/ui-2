import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const Button: React.FC<Props> = ({ title, ...props }) => {
    return <button {...props}>{title}</button>;
};

export default Button;
