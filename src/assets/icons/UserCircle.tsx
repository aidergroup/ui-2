import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M12 0a12 12 0 1 0 12 12A12.014 12.014 0 0 0 12 0zm0 4.8a3.6 3.6 0 1 1 0 7.2 3.6 3.6 0 0 1 0-7.2zm6.194 14.513a9.53 9.53 0 0 1-12.393 0 .605.605 0 0 1-.065-.857 8.283 8.283 0 0 1 12.52 0 .604.604 0 0 1-.062.857z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
