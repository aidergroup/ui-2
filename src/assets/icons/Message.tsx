import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M15.826 2.25H8.174a7.674 7.674 0 0 0 0 15.348H9v3.652a.5.5 0 0 0 .863.344l3.785-4h2.178a7.674 7.674 0 0 0 0-15.348v.004z" />
    </svg>
);
export default SvgComponent;
