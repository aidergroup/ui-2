import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M16 5.75a.75.75 0 0 0 .75-.75V3.5a.75.75 0 1 0-1.5 0V5a.75.75 0 0 0 .75.75z" />
        <path d="M21 3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V3zm-9 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-1-3.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm5.5 8.25a.75.75 0 1 1 0 1.5H11a.75.75 0 1 1 0-1.5h5.5zm0-2.75a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm-9 4.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM6 2h12a1 1 0 0 1 1 1v3.25a.25.25 0 0 1-.25.25H5.25A.25.25 0 0 1 5 6.25V3a1 1 0 0 1 1-1z" />
    </svg>
);
export default SvgComponent;
