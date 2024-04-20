import React, { useState, useEffect } from "react";

const HackedAnimation: React.FC<{ value: string }> = ({ value }) => {
  const [text, setText] = useState<string>(value);
  const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM";
  let interval: NodeJS.Timeout;

  useEffect(() => {
    const handleMouseOver = () => {
      clearInterval(interval);
      let iteration = 0;
      interval = setInterval(() => {
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
          clearInterval(interval);
        }
      }, 30); // Adjust interval to control the animation speed
    };

    const element = document.getElementById(`hacked-animation-${value}`);
    if (element) {
      element.addEventListener("mouseover", handleMouseOver);

      return () => {
        clearInterval(interval);
        element.removeEventListener("mouseover", handleMouseOver);
      };
    }
  }, [value]);

  return <h1 id={`hacked-animation-${value}`}>{text}</h1>;
};

export default HackedAnimation;
