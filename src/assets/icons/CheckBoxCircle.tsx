import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="M0 12C0 5.373 5.373 0 12 0c6.624.008 11.992 5.376 12 12 0 6.627-5.373 12-12 12S0 18.627 0 12zm12.082 5.489L18.927 8.2a1 1 0 1 0-1.61-1.183l-6.227 8.451-4.076-3.261a1 1 0 0 0-1.25 1.562l4.888 3.908a1.011 1.011 0 0 0 1.43-.188z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
