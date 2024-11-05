import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M4 2.5a1.5 1.5 0 0 0 0 3h11.76a.25.25 0 0 1 .176.427l-13 13.013a1.5 1.5 0 0 0 2.124 2.12L18.075 8.031a.25.25 0 0 1 .427.177V20a1.5 1.5 0 0 0 3 0V5A2.5 2.5 0 0 0 19 2.5H4z" />
    </svg>
);
export default SvgComponent;
