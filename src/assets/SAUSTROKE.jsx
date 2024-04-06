import React from "react";

const SAUSTROKE = () => {
  const strokeWidth = 0.5
  return (
    <svg
      width="126"
      height="30"
      viewBox="0 0 126 30"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-cardBlack"
    >
      <path
        d="M85 22L90 1H106.5L100 29L85 22Z"
        stroke="white"
        stroke-width={strokeWidth}
      />
      <path
        d="M104 18L108 1H125L120 25L104 18Z"
        stroke="white"
        stroke-width={strokeWidth}
      />
      <path
        d="M65 1H88L81.5 29H67L54 24H68.5L72.5 9.5L44.5 29H24L65 1Z"
        stroke="white"
        stroke-width={strokeWidth}
      />
      <path
        d="M0.647491 14.8H20.4382L40.3525 1.2H20.5618L0.647491 14.8ZM20.5618 15.2L0.647495 28.8H20.4382L40.3525 15.2H20.5618Z"
        stroke="white"
        stroke-width={strokeWidth}
      />
    </svg>
  );
};

export default SAUSTROKE;
