import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface DownRightProps {
  className: string;
}

const DownRight: React.FC<DownRightProps> = ({ className }) => {
  useGSAP(() => {
    gsap.from("#arrow", {
      rotation: -40,
      opacity: 0,
      duration: 1.3
    })
  })
  return (
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
    >
      <g id="arrow">
        <path
          d="M1 0.882568L32 30.8798"
          stroke="white"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
        <path
          d="M32 7.65625V30.8799H8"
          stroke="white"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default DownRight;
