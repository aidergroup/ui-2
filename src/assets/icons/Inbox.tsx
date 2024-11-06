import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M24 4.2A4.205 4.205 0 0 0 19.8 0H4.2A4.205 4.205 0 0 0 0 4.2v17.4A2.4 2.4 0 0 0 2.4 24h19.2a2.4 2.4 0 0 0 2.4-2.4V4.2zM16.985 12a1.701 1.701 0 0 0-1.663 1.733 3.322 3.322 0 0 1-6.644 0A1.701 1.701 0 0 0 7.015 12H4.2a.6.6 0 0 1-.6-.6V4.2a.6.6 0 0 1 .6-.6h15.6a.6.6 0 0 1 .6.6v7.2a.6.6 0 0 1-.6.6h-2.815z" />
    </svg>
);
export default SvgComponent;
