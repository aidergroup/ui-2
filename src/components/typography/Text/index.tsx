import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

const Text: React.FC<Props> = ({ text, ...props }) => {
    return <p {...props}>{text}</p>;
};

export default Text;
