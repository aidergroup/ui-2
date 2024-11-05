import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <g clipPath="url(#a)">
            <path d="M19.495 10.57a.86.86 0 0 0-.638-.284H5.143a.856.856 0 0 0-.857.948l1.285 12A.857.857 0 0 0 6.43 24h11.143a.857.857 0 0 0 .857-.766l1.285-12a.86.86 0 0 0-.22-.664m1.934-5.784h-4.286a.43.43 0 0 1-.429-.428V3a3.003 3.003 0 0 0-3-3h-3.428a3.014 3.014 0 0 0-3 2.954l-.02 1.409a.43.43 0 0 1-.43.423H2.572a1.714 1.714 0 0 0 0 3.429H21.43a1.714 1.714 0 1 0 0-3.429zM9.857 2.993a.43.43 0 0 1 .429-.422h3.428a.43.43 0 0 1 .429.429v1.358a.43.43 0 0 1-.429.428h-3.449a.43.43 0 0 1-.428-.435z" />
        </g>
        <defs>
            <clipPath id="a">
                <path d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgComponent;
