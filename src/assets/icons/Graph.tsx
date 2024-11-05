import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M14.88.194a1.286 1.286 0 0 0-1.594 1.248v9.337c0 .342.135.67.377.91l6.602 6.602c.241.24.569.376.91.376.05.002.102.002.152 0a1.283 1.283 0 0 0 .947-.61A12 12 0 0 0 14.88.193Z" />
            <path d="M12 23.844A12 12 0 0 1 9.12.194a1.286 1.286 0 0 1 1.594 1.248v10.402a1.276 1.276 0 0 0 .377.91l7.356 7.354a1.286 1.286 0 0 1-.245 2.01A11.987 11.987 0 0 1 12 23.844ZM8.143 3.924a.429.429 0 0 0-.631-.377 9.429 9.429 0 0 0 7.178 17.335.428.428 0 0 0 .171-.714l-5.588-5.597a3.832 3.832 0 0 1-1.13-2.727v-7.92Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
