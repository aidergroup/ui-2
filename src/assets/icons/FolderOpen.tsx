import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path d="M23.44 9.549A1.493 1.493 0 0 0 22.28 9H10.42a.5.5 0 0 1-.49-.4L9.65 7.205A1.5 1.5 0 0 0 8.181 6H1.72A1.5 1.5 0 0 0 .248 7.8l2.6 13A1.5 1.5 0 0 0 4.32 22h15.961a1.5 1.5 0 0 0 1.47-1.2l2-10a1.5 1.5 0 0 0-.31-1.251ZM3.22 5a1 1 0 0 0 .98-.778A.263.263 0 0 1 4.443 4H19.72a.5.5 0 0 1 .5.5V7a1 1 0 1 0 2 0V4a2 2 0 0 0-2-2h-16a2 2 0 0 0-2 2 1 1 0 0 0 1 1Z" />
    </svg>
);
export default SvgComponent;
