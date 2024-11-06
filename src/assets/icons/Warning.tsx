import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="M0 12C0 5.373 5.373 0 12 0c6.624.007 11.993 5.376 12 12 0 6.627-5.373 12-12 12S0 18.627 0 12zm2 0c0 5.523 4.477 10 10 10 5.52-.006 9.994-4.48 10-10 0-5.523-4.477-10-10-10S2 6.477 2 12z"
            clipRule="evenodd"
        />
        <path d="M10.643 15.67a1.336 1.336 0 0 1 1.31-1.385h.025c.742.002 1.35.589 1.379 1.33A1.335 1.335 0 0 1 12.045 17h-.024a1.384 1.384 0 0 1-1.379-1.33zm.452-3.658v-5.43a.905.905 0 0 1 1.81 0v5.43a.905.905 0 0 1-1.81 0z" />
    </svg>
);
export default SvgComponent;
