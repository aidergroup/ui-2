import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
    text: string;
}

const Text: React.FC<Props> = ({ text, ...props }) => {
    return (
        <p className="text-gray-500 font-normal" {...props}>
            {text}
        </p>
    );
};

export default Text;
