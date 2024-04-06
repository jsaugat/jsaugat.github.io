import React from "react";

const DownArrowBall = ({ className }) => {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 12L23 23M23 23L23 12M23 23L12 23"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="projects-btn-arrow"
      />
      <circle cx="17.5" cy="17.5" r="17" stroke="#3F3F3F" className="projects-btn-circle" />
    </svg>
  );
};

export default DownArrowBall;
