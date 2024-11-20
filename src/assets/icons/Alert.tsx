import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25" {...props}>
        <path
            fillRule="evenodd"
            d="M11.984 1.001a12.205 12.205 0 0 0-8.51 3.653 11.8 11.8 0 0 0-3.472 8.554A11.778 11.778 0 0 0 11.8 25h.214c6.678-.069 12.04-5.53 11.985-12.208a11.766 11.766 0 0 0-12.016-11.79zm-1.483 16.541a1.476 1.476 0 0 1 1.449-1.53h.027c.82.002 1.492.651 1.522 1.47a1.475 1.475 0 0 1-1.449 1.53h-.027a1.529 1.529 0 0 1-1.522-1.47zM11 7.501v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-2 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
