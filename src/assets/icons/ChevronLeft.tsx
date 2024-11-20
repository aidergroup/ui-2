import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M4.533 12a2.3 2.3 0 0 0 .78 1.729l11.152 9.811a1.847 1.847 0 0 0 2.44-2.773l-9.753-8.579a.25.25 0 0 1 0-.376l9.752-8.579A1.847 1.847 0 0 0 16.465.46L5.317 10.268A2.31 2.31 0 0 0 4.533 12z" />
    </svg>
);
export default SvgComponent;
