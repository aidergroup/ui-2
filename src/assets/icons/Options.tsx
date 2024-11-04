import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12 6.5A3.25 3.25 0 1 0 12 0a3.25 3.25 0 0 0 0 6.5zm0 8.75a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5zM12 24a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5z" />
    </svg>
);
export default SvgComponent;
