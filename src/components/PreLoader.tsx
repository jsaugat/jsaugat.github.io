"use client"

import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function PreLoader({ numberOfBlinders = 6 }) {
    //? useLayoutEffect = sync useEffect
  useGSAP(() => {
    gsap.to(".blinder", {
      scaleY: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);
  
  //? syntax: Array.from( { length: X }, map function ). "_" is used as a convention for a parameter that is intentionally ignored
  const blinders = Array.from({ length: numberOfBlinders }, (_, index) => (
    <div key={index} className="blinder"></div>
  ));

  return (
    <div className="blinder-container absolute z-50 h-screen w-full text-black flex gap-0 pointer-events-none">
      {blinders}
    </div>
  );
}

export default PreLoader;
