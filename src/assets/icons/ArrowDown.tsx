import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M23.292 10.24a1.413 1.413 0 0 0-1.994.127l-7.448 8.464a.25.25 0 0 1-.438-.166V1.413a1.412 1.412 0 0 0-2.824 0v17.252a.25.25 0 0 1-.438.166L2.7 10.367a1.412 1.412 0 1 0-2.119 1.867L10.233 23.2a2.354 2.354 0 0 0 3.534 0l9.652-10.967a1.412 1.412 0 0 0-.127-1.993z" />
    </svg>
);
export default SvgComponent;
