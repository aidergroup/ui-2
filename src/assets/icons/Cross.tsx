import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M13.728 11.692a.24.24 0 0 1 0-.34L22.62 2.46A1.44 1.44 0 1 0 20.581.424L11.69 9.312a.24.24 0 0 1-.34 0L2.458.424A1.44 1.44 0 1 0 .421 2.46l8.89 8.892a.24.24 0 0 1 0 .34l-8.89 8.892a1.44 1.44 0 0 0 2.037 2.037l8.892-8.893a.24.24 0 0 1 .34 0l8.891 8.893a1.44 1.44 0 0 0 2.038-2.037l-8.891-8.892z" />
    </svg>
);
export default SvgComponent;
