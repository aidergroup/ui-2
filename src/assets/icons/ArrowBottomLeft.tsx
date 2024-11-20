import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M20 21.5a1.5 1.5 0 1 0 0-3H8.24a.25.25 0 0 1-.176-.427L21.063 5.06a1.5 1.5 0 1 0-2.123-2.12L5.925 15.97a.25.25 0 0 1-.427-.178V4a1.5 1.5 0 0 0-3 0v15A2.5 2.5 0 0 0 5 21.5h15z" />
    </svg>
);
export default SvgComponent;
