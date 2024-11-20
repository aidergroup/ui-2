import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path
            fill="#CCEBF4"
            d="M0 3.6A3.6 3.6 0 0 1 3.6 0h16.8A3.6 3.6 0 0 1 24 3.6v16.8a3.6 3.6 0 0 1-3.6 3.6H3.6A3.6 3.6 0 0 1 0 20.4V3.6Z"
        />
        <path
            fill="#006C8C"
            d="M5.763 7.269a2.413 2.413 0 1 0 4.826 0 2.413 2.413 0 0 0-4.826 0ZM14.72 10.5a.603.603 0 0 0-1.024 0l-2.926 4.683a.303.303 0 0 1-.512 0l-1.042-1.668a.603.603 0 0 0-1.023 0l-3.348 5.356a.302.302 0 0 0 .256.462h14.597a.302.302 0 0 0 .256-.462L14.719 10.5Z"
        />
    </svg>
);
export default SvgComponent;
