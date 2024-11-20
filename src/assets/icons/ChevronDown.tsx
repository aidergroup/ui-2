import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 19.483a2.3 2.3 0 0 1-1.729-.78L.478 7.551A1.847 1.847 0 0 1 3.25 5.112l8.58 9.752a.25.25 0 0 0 .375 0l8.58-9.752a1.847 1.847 0 0 1 2.772 2.44L13.75 18.698a2.31 2.31 0 0 1-1.732.784z" />
    </svg>
);
export default SvgComponent;
