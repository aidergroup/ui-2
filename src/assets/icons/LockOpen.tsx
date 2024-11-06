import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="M18.75 6.75v3.31a4.988 4.988 0 0 1 2.75 4.44V19a5.006 5.006 0 0 1-5 5h-9a5.006 5.006 0 0 1-5-5v-4.5a5.006 5.006 0 0 1 5-5h8.25a.5.5 0 0 0 .5-.5V6.75a4.25 4.25 0 0 0-8.5 0 1.25 1.25 0 1 1-2.5 0 6.75 6.75 0 0 1 13.5 0zM12 18.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
