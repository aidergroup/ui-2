import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M22.286 14.143V3a3.003 3.003 0 0 0-3-3H5.57a3.86 3.86 0 0 0-3.857 3.857v15.429A4.718 4.718 0 0 0 6.43 24H21a1.286 1.286 0 0 0 0-2.571h-.857a.429.429 0 0 1-.429-.429v-3.538a.428.428 0 0 1 .32-.415 3.005 3.005 0 0 0 2.252-2.904zM6.429 21.429a2.143 2.143 0 0 1 0-4.286h10.285a.428.428 0 0 1 .429.428V21a.428.428 0 0 1-.429.429H6.43z" />
    </svg>
);
export default SvgComponent;
