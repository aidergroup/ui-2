import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M21 17.5a1.5 1.5 0 0 1-1.5-1.5v-4.862A7.957 7.957 0 0 0 13 3.073V1a1 1 0 1 0-2 0v2.073a7.957 7.957 0 0 0-6.5 8.065V16A1.5 1.5 0 0 1 3 17.5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2zM14.236 21H9.764a.25.25 0 0 0-.248.222 2.5 2.5 0 1 0 4.968 0 .248.248 0 0 0-.248-.222z" />
    </svg>
);
export default SvgComponent;
