import React, { FC } from "react";

interface Props {
  className: string;
  pathClassName: string;
}

const RightArrow: FC<Props> = ({ className, pathClassName }) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 8.49985L16.5563 8.49986M16.5563 8.49986L8.77817 0.72168M16.5563 8.49986L8.77818 16.278"
        stroke="#F1F1F1"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={pathClassName}
      />
    </svg>
  );
};

export default RightArrow;
