import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="m12.707.293 11 11A1 1 0 0 1 23 13h-1.25a.25.25 0 0 0-.25.25V23a1 1 0 0 1-1 1h-5.75a.25.25 0 0 1-.25-.25V19a2.5 2.5 0 0 0-5 0v4.75a.25.25 0 0 1-.25.25H3.5a1 1 0 0 1-1-1v-9.75a.25.25 0 0 0-.25-.25H1a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 0zM9.5 9.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
