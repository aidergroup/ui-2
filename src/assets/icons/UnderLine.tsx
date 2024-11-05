import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M22.5 21.248h-21a1.25 1.25 0 1 0 0 2.5h21a1.25 1.25 0 1 0 0-2.5zM1.978 2.748h1.363a.25.25 0 0 1 .25.25v8.523a8.41 8.41 0 1 0 16.818 0V3a.25.25 0 0 1 .25-.25h1.363a1.25 1.25 0 0 0 0-2.5H16.3a1.25 1.25 0 0 0 0 2.5h1.363a.25.25 0 0 1 .25.25v8.523a5.909 5.909 0 1 1-11.818 0V3a.25.25 0 0 1 .25-.25H7.7a1.25 1.25 0 0 0 0-2.5H1.978a1.25 1.25 0 1 0 0 2.5v-.002z" />
    </svg>
);
export default SvgComponent;
