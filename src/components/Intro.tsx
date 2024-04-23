import { Button } from "@/components/ui/button";
import RightArrow from "@/assets/RightArrow";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
// import "@/styles/";

const Intro = () => {
  useGSAP(() => {
    const splitTypes = document.querySelectorAll<HTMLElement>(".left-intro");
    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars" });

      // gsap.from(text.chars, {
      //   duration: 0.7,
      //   stagger: 0.1,
      //   scrollTrigger: {
      //     trigger: char,
      //     start: "top 80%",
      //     end: "top 30%",
      //     scrub: false,
      //     toggleActions: "play play reverse reverse",
      //     markers: false,
      //   },
      // });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          markers: false,
        },
        opacity: 0.1,
        stagger: 0.1,
      });
    });
  });
  return (
    <main className="h-[90vh] grid place-items-center">
      <section className="relative flex gap-[5vw] h-[50vh]">
        {/* left */}
        <div className="text-7xl leading-none font-montreal">
          <h2 className="left-intro ">
            Transforming your
            <br /> digital dreams into
            <br />
          </h2>
          <div className="flex items-center gap-4">
            <h2 className="left-intro">reality.</h2>
            <div className="inline-flex mt-2 h-[3.5rem] w-[9rem] bg-gradient-to-r from-transparent to-muted rounded-full items-center justify-around border-2 border-onyx">
              {/* two stars */}
              <LeftStar />
              <RightStar />
            </div>
          </div>
        </div>
        {/* right */}
        <div className="relative top-[46%] h-fit">
          <p className="uppercase text-neutral-500 mb-4">(about this guy)</p>
          <h3 className="uppercase text-2xl leading-tight">
            I’m a 22 Y.O. CS STUDENT, Persistently
            <br /> upgrading my skill set. hit me up for
            <br /> interesting projects and discussion.
          </h3>
          <Button variant="outline" className="about-btn mt-8 flex gap-5">
            <span className="">About Me</span>
            <RightArrow className="right-arrow" />
          </Button>
        </div>
      </section>
    </main>
  );
};
const LeftStar = () => (
  <svg
    width="45"
    height="45"
    viewBox="0 0 31 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.0332 30.4375C15.6191 16.497 15.0835 16.3182 0.357833 22.7881C14.6564 15.451 14.8425 14.926 8.31757 0.56244C15.7317 14.503 16.2673 14.6818 30.993 8.21184C16.6955 15.5512 16.5062 16.0696 23.0332 30.4375Z"
      fill="white"
    />
  </svg>
);
const RightStar = () => (
  <svg
    width="43"
    height="43"
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_447_304"
      style={{ maskType: "luminance" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="34"
      height="35"
    >
      <path d="M34 0.88623H0V34.1135H34V0.88623Z" fill="white" />
    </mask>
    <g mask="url(#mask0_447_304)">
      <path
        d="M17 34.1135C16.5078 18.3741 16.1055 17.9833 0 17.4999C16.1055 17.0189 16.5054 16.6257 17 0.88623C17.4921 16.6257 17.8945 17.0165 34 17.4999C17.8945 17.9833 17.4947 18.3693 17 34.1135Z"
        fill="white"
      />
    </g>
  </svg>
);

export default Intro;
