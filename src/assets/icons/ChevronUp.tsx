import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <path d="M12.017 4.517a2.3 2.3 0 0 1 1.73.78l9.81 11.152a1.847 1.847 0 0 1-2.773 2.439l-8.579-9.752a.25.25 0 0 0-.376 0L3.25 18.888a1.847 1.847 0 0 1-2.773-2.44l9.808-11.147a2.31 2.31 0 0 1 1.732-.784z" />
    </svg>
);
export default SvgComponent;
