import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M3 .013H1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-.75a.25.25 0 0 1 .25-.25H3a1 1 0 0 0 0-2Zm16 2h.75a.25.25 0 0 1 .25.25v.75a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2Zm-10-2H7a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2Zm6 2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2h2Zm-12 18h-.75a.25.25 0 0 1-.25-.25v-.75a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2Zm6 0H7a1 1 0 0 0 0 2h2a1 1 0 1 0 0-2Zm-8-10a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 6a1 1 0 0 0 1-1v-2a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm20-10a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Zm2.488 10.079L13.11 12.2a.716.716 0 0 0-.808.128.724.724 0 0 0-.125.809l3.931 10.337a.671.671 0 0 0 .625.508h.035c.136-.01.466-.083.59-.586l1.142-4.688a.252.252 0 0 1 .183-.183l4.732-1.183c.5-.125.575-.457.583-.593a.66.66 0 0 0-.51-.657Z" />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
