import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M19.5 12a2.3 2.3 0 0 1-.78 1.729L7.568 23.54a1.847 1.847 0 0 1-2.44-2.773l9.753-8.579a.25.25 0 0 0 0-.376L5.129 3.233A1.847 1.847 0 0 1 7.568.46l11.148 9.808A2.31 2.31 0 0 1 19.5 12z" />
    </svg>
);
export default SvgComponent;
