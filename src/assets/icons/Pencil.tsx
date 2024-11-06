import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M15.067 3.986a.5.5 0 0 0-.708-.001L3.437 14.91a.5.5 0 0 0 0 .707l4.948 4.948a.5.5 0 0 0 .707 0L20.009 9.648a.5.5 0 0 0 0-.706l-4.942-4.956zM2.43 16.8a.5.5 0 0 0-.84.237L.084 23.314a.5.5 0 0 0 .603.602l6.272-1.5a.5.5 0 0 0 .237-.84L2.43 16.8zM23.2 2.924 21.077.8a2.5 2.5 0 0 0-3.532 0l-1.418 1.417a.5.5 0 0 0 0 .707l4.95 4.949a.5.5 0 0 0 .707 0L23.2 6.454a2.5 2.5 0 0 0 0-3.53z" />
    </svg>
);
export default SvgComponent;
