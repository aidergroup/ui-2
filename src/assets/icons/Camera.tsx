import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M21 5.571h-2.786L16.03 2.657A1.286 1.286 0 0 0 15 2.143H9a1.286 1.286 0 0 0-1.029.514L5.786 5.571H3a3.003 3.003 0 0 0-3 3v10.286a3.003 3.003 0 0 0 3 3h18a3.003 3.003 0 0 0 3-3V8.571a3.003 3.003 0 0 0-3-3zm-9 13.286a5.572 5.572 0 1 1 5.571-5.571A5.578 5.578 0 0 1 12 18.857z" />
    <path d="M9 13.286a3 3 0 1 0 6 0 3 3 0 0 0-6 0z" />
  </svg>
)
export default SvgComponent
