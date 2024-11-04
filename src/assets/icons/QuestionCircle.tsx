import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.993 5.376 18.624.007 12 0zm0 19a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.163a1 1 0 0 1 .6-.917v.001A4 4 0 1 0 8 9.255a1 1 0 1 0 2 0 2 2 0 1 1 2.8 1.832 3 3 0 0 0-1.8 2.75 1 1 0 1 0 2 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
