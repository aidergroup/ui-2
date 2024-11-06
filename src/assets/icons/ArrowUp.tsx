import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M23.421 11.765 13.768.8A2.641 2.641 0 0 0 12 0a2.645 2.645 0 0 0-1.768.8L.579 11.765A1.412 1.412 0 1 0 2.7 13.632l7.45-8.466a.25.25 0 0 1 .437.166v17.255a1.413 1.413 0 1 0 2.826 0V5.332a.25.25 0 0 1 .438-.165l7.449 8.465a1.412 1.412 0 1 0 2.121-1.867z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
