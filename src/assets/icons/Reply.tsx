import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M19.618 10.679c-3.011-2.67-7.125-2.853-8.859-2.793a.249.249 0 0 1-.259-.25V5.064A1 1 0 0 0 8.858 4.3l-7.494 6.366a1 1 0 0 0-.013 1.532l7.513 6.637a1 1 0 0 0 1.636-.773v-3.035a.25.25 0 0 1 .2-.244c1.908-.4 8.135-1.158 11.36 4.89a.5.5 0 0 0 .94-.235c0-3.821-1.138-6.767-3.382-8.759z" />
    </svg>
);
export default SvgComponent;
