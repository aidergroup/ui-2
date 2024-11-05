import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M18.75 10.063V6.748a6.75 6.75 0 0 0-13.5 0v3.315A4.987 4.987 0 0 0 2.5 14.5V19a5.005 5.005 0 0 0 5 5h9a5.005 5.005 0 0 0 5-5v-4.5a4.986 4.986 0 0 0-2.75-4.437ZM14 16.452a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 2.5a4.255 4.255 0 0 1 4.25 4.25V9a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1-.5-.5V6.748A4.255 4.255 0 0 1 12 2.5Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
