import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M0 12a1.5 1.5 0 0 0 1.5 1.5h8.75a.25.25 0 0 1 .25.25v8.75a1.5 1.5 0 0 0 3 0v-8.75a.25.25 0 0 1 .25-.25h8.75a1.5 1.5 0 0 0 0-3h-8.75a.25.25 0 0 1-.25-.25V1.5a1.5 1.5 0 0 0-3 0v8.75a.25.25 0 0 1-.25.25H1.5A1.5 1.5 0 0 0 0 12z" />
    </svg>
);
export default SvgComponent;
