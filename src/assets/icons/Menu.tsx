import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M.5 4A1.5 1.5 0 0 1 2 2.5h20a1.5 1.5 0 0 1 0 3H2A1.5 1.5 0 0 1 .5 4zm0 8A1.5 1.5 0 0 1 2 10.5h20a1.5 1.5 0 0 1 0 3H2A1.5 1.5 0 0 1 .5 12zm0 8A1.5 1.5 0 0 1 2 18.5h20a1.5 1.5 0 0 1 0 3H2A1.5 1.5 0 0 1 .5 20z" />
    </svg>
);
export default SvgComponent;
