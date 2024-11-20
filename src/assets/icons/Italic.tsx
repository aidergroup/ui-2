import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...props}>
        <path d="M3 47v-5.331h10.811L28.356 6.33H16.533V1H45v5.331H34.189L19.644 41.67h11.823V47H3Z" />
    </svg>
);
export default SvgComponent;
