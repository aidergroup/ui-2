import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M5.603 9.254a6.45 6.45 0 0 1 12.675 0h.588a5.134 5.134 0 1 1 0 10.268H5.134a5.134 5.134 0 0 1 0-10.268h.469z" />
    </svg>
);
export default SvgComponent;
