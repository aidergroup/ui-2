import React from "react";

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
    title: string;
}

const Button: React.FC<Props> = ({ title, ...props }) => {
    return (
        <button className="bg-gray-100" {...props}>
            {title}
        </button>
    );
};

export default Button;
