import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path d="M6.847 21.428a3.409 3.409 0 0 1-2.662-1.338l-3.76-4.274a1.714 1.714 0 0 1 2.572-2.263l3.522 4.01a.429.429 0 0 0 .631.014L21.036 3.103a1.714 1.714 0 1 1 2.486 2.363l-14.06 14.8a3.328 3.328 0 0 1-2.615 1.162Z" />
    </svg>
);
export default SvgComponent;
