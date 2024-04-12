"use client"

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function PreLoader({ numberOfBlinders = 6 }) {
  const blinderContainer = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    gsap.to(".blinder", {
      scaleY: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power4.out",
    });
  }, { scope: blinderContainer });
  
  //? syntax: Array.from( { length: X }, map function ). "_" is used as a convention for a parameter that is intentionally ignored
  const blinders = Array.from({ length: numberOfBlinders }, (_, index) => (
    <div key={index} className="blinder"></div>
  ));

  return (
    <div ref={blinderContainer} className="blinder-container fixed z-50 h-full w-full text-black flex gap-0 pointer-events-none">
      {blinders}
    </div>
  );
}

export default PreLoader;
