import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path
            fillRule="evenodd"
            d="m18.978 16.268 4.46 4.46c.75.75.75 1.964 0 2.714a1.944 1.944 0 0 1-2.715 0l-4.46-4.458a9.846 9.846 0 1 1 2.715-2.716zm-1.218-5.463a6.96 6.96 0 0 0-6.96-6.96 6.968 6.968 0 0 0-6.96 6.96 6.96 6.96 0 1 0 13.92 0z"
            clipRule="evenodd"
        />
    </svg>
);
export default SvgComponent;
