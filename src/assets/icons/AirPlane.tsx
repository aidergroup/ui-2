import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M23.82 1.116a.5.5 0 0 0-.512-.078l-23 9.5a.5.5 0 0 0 .01.927l6.332 2.459a.5.5 0 0 0 .468-.056l8.4-5.974a.5.5 0 0 1 .637.768l-7 6.745a.5.5 0 0 0-.153.36V22.5a.5.5 0 0 0 .931.252l3.167-5.425a.252.252 0 0 1 .337-.093l5.826 3.2a.5.5 0 0 0 .73-.332l4-18.5a.508.508 0 0 0-.173-.486z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
