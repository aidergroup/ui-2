import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M22.5 5H11.236a.5.5 0 0 1-.447-.276l-.947-1.9A1.494 1.494 0 0 0 8.5 2h-7A1.5 1.5 0 0 0 0 3.5v17A1.5 1.5 0 0 0 1.5 22h21a1.5 1.5 0 0 0 1.5-1.5v-14A1.5 1.5 0 0 0 22.5 5z" />
    </svg>
);
export default SvgComponent;
