import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import React from "react";

const SAU = ({ className }) => {
  useGSAP(() => {
    gsap.from("#letterS path, #letterA path, #letterU path", {
      x: 150,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,
      ease: "power4.out",
    });
  });

  return (
    <svg
      width="124"
      height="28"
      viewBox="0 0 124 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* S */}
      <g id="letterS">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.5 0H41L20.5 14H41L20.5 28H3.57628e-07L20.5 14H3.57628e-07L20.5 0Z"
          fill="white"
        />
      </g>
      {/* A */}
      <g id="letterA">
        <path
          d="M86.1347 0H67.1346L73.5 8.5L69.5449 22.9388H55L68 28H79.5L86.1347 0Z"
          fill="url(#paint0_linear_575_104)"
        />
        <path d="M86 0L45.5 28H25L66 0H86Z" fill="white" />
      </g>
      {/* U */}
      <g id="letterU">
        <path d="M84 21L89 0H105.5L99 28L84 21Z" fill="white" />
        <path
          d="M103 17L107 0H124L119 24L103 17Z"
          fill="url(#paint1_linear_575_104)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_575_104"
          x1="80"
          y1="19.5"
          x2="69.6344"
          y2="7.63531"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8F8F8" />
          <stop offset="1" stop-color="gray" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_575_104"
          x1="116.5"
          y1="16"
          x2="109"
          y2="3"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.120579" stop-color="white" />
          <stop offset="1" stop-color="#f1f1f1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SAU;
