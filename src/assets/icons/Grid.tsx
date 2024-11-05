import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" {...props}>
        <path d="M.26.257h6.771v6.771H.261V.258zm0 8.854h6.771v6.771H.261v-6.77zm0 8.855h6.771v6.77H.261v-6.77zM9.115.257h6.77v6.771h-6.77V.258zm0 8.854h6.77v6.771h-6.77v-6.77zm0 8.855h6.77v6.77h-6.77v-6.77zM17.969.257h6.77v6.771h-6.77V.258zm0 8.854h6.77v6.771h-6.77v-6.77zm0 8.855h6.77v6.77h-6.77v-6.77z" />
    </svg>
);
export default SvgComponent;
