import { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="trash_svg__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M861.184 192.512q30.72 0 50.688 10.24t31.744 25.6T960 261.632t4.608 33.28q0 7.168-.512 11.264t-.512 7.168v6.144H896v537.6q0 20.48-8.192 39.424t-23.552 33.28-37.376 23.04-50.688 8.704H319.488q-26.624 0-50.176-8.192t-40.448-23.04-26.624-35.84-9.728-47.616v-527.36h-63.488q-1.024-1.024-1.024-5.12-1.024-5.12-1.024-31.744 0-13.312 6.144-29.696t18.432-30.208 31.744-23.04 46.08-9.216h91.136V128q0-26.624 18.432-45.568T384 63.488h320.512q35.84 0 49.664 18.944T768 128v63.488q21.504 1.024 46.08 1.024h47.104zm-477.184 0h320.512V128H384v64.512zm-31.744 648.192q32.768 0 32.768-41.984V323.584h-63.488V798.72q0 21.504 6.656 31.744t24.064 10.24zm193.536-1.024q17.408 0 23.552-9.728t6.144-31.232V323.584H512V798.72q0 40.96 33.792 40.96zm192.512-2.048q18.432 0 24.576-9.728t6.144-31.232V323.584h-64.512v473.088q0 40.96 33.792 40.96z"
      fill="#fff"
    />
  </svg>
);
export default SvgTrash;