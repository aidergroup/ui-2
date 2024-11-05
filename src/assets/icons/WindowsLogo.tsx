import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="m0 3.398 9.808-1.332.004 9.432-9.803.056L0 3.397zm9.803 9.187.008 9.44L.008 20.68v-8.16l9.795.064zm1.19-10.693L23.996 0v11.378l-13.005.103V1.892zM24 12.673 23.997 24l-13.005-1.83-.018-9.518L24 12.673z" />
    </svg>
);
export default SvgComponent;
