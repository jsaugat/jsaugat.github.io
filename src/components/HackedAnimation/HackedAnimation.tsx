import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

const HackedAnimation: React.FC<{ value: string; bgAnimation: boolean }> = ({
  value,
  bgAnimation = false,
}) => {
  const [text, setText] = useState<string>(value);
  const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseOver = () => {
      // clearInterval(intervalRef.current);
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

      return () => {
        clearInterval(intervalRef.current);
        element.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, [value]);

  return (
    <p
      id={`hacked-animation-${value}`}
      className={`${bgAnimation === true && styles.animateBG}`}
    >
      {text}
    </p>
  );
};

export default HackedAnimation;
