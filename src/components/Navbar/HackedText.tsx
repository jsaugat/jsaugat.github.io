// import { useEffect, useState } from "react";

// const AlphaAnimation = () => {
//   const alpha = "QWERTYUIOPASDFGHJKLZXCVBNM0123456789";
//   const [iteration, setIteration] = useState(0);
//   const [intervalId, setIntervalId] = useState(null);

//   const startAnimation = (
//     event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
//   ) => {
//     clearInterval(intervalId);
//     const targetLength = (event.target as HTMLElement).dataset.value.length;
//     const newIntervalId = setInterval(() => {
//       setIteration((prevIteration) => prevIteration + 1 / 2);
//     }, 21);
//     setIntervalId(newIntervalId);
//   };

//   useEffect(() => {
//     return () => clearInterval(intervalId);
//   }, [intervalId]);

//   const generateText = (text: string) => {
//     return text
//       .split("")
//       .map((letter, idx) => {
//         if (idx < iteration) {
//           return text[idx];
//         }
//         return alpha[Math.floor(Math.random() * alpha.length)];
//       })
//       .join("");
//   };

//   return (
//     <h1 onMouseOver={startAnimation} data-value="RYANGOSLING">
//       {generateText("RYANGOSLING")}
//     </h1>
//   );
// };
