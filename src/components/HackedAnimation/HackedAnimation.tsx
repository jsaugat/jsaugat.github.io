import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";
import { gsap } from "gsap";
import SplitType from "split-type";

const HackedAnimation: React.FC<{ value: string; bgAnimation: boolean }> = ({
  value,
  bgAnimation = false,
}) => {
  const [text, setText] = useState<string>(value);
  const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseOver = () => {
      clearInterval(intervalRef.current);
      let iteration = 0;
      intervalRef.current = setInterval(() => {
        setText((prevText) =>
          prevText
            .split("")
            .map((letter, idx) => {
              if (idx < iteration) {
                return value[idx];
              }
              // Adjust the animation speed by modifying the divisor (e.g., 4)
              return alpha[Math.floor(Math.random() * alpha.length)];
            })
            .join("")
        );

        iteration += 1; // Increase iteration for smoother animation
        if (iteration > value.length) {
          clearInterval(intervalRef.current);
        }
      }, 60); // Adjust interval to control the animation speed
    };

    const element = document.getElementById(`hacked-animation-${value}`);
    if (element) {
      element.addEventListener("mouseover", handleMouseOver);

      // GSAP Animation
      const splitTypes = document.querySelectorAll<HTMLElement>(
        `#hacked-animation-${value}`
      );
      splitTypes.forEach((char, i) => {
        const textSplit = new SplitType(char, { types: "chars" });

        gsap.from(textSplit.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 80%",
            end: "top 30%",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
      });

      return () => {
        clearInterval(intervalRef.current);
        element.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, [value]);

  return (
    <p
      id={`hacked-animation-${value}`}
      className={`${bgAnimation === true && style.animateBG}`}
    >
      {text}
    </p>
  );
};

export default HackedAnimation;
