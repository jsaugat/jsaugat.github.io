"use client";

import { Button } from "@/components/ui/button";
import RightArrow from "@/components/assets/RightArrow";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
// import "@/styles/";

gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "power3.in" });

const Intro = () => {
  useGSAP(() => {
    const leftIntro = gsap.utils.toArray<HTMLElement>(".left-intro");
    // const panels = gsap.utils.toArray<HTMLElement>(".panel");

    leftIntro.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars" });
      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 85%",
          end: "+=200",
          scrub: 1,
          markers: false,
        },
        opacity: 0.1,
        stagger: 0.05,
        ease: "power4.in",
      });
    });

    gsap.from(".right-intro", {
      scrollTrigger: {
        trigger: ".right-intro",
        start: "top 60%",
        end: "+=100",
        markers: false,
        scrub: 1,
      },
      opacity: 1,
    });

    // Panels animation
    // const tl = gsap.timeline();
    // tl.from(".red", { xPercent: -100 })
    //   .from(".blue", { xPercent: 100 })
    //   .from(".green", { yPercent: -100 })

    // panels.forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: "top top",
    //     scrub: true,
    //     pin: true,
    //     pinSpacing: false,
    //   });
    // });
  });

  return (
    <>
      <main className="main h-screen grid place-items-center">
        <section className="relative flex gap-[5vw] h-[50vh]">
          {/* Left Intro */}
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

          {/* Right Intro */}
          <section className="relative right-intro top-[46%] h-fit">
            <p className="uppercase text-neutral-500 mb-4">(about this guy)</p>
            <h3 className="uppercase text-2xl leading-tight">
              I’m a 22 Y.O. CS STUDENT, Persistently
              <br /> upgrading my skill set. hit me up for
              <br /> interesting projects and discussion.
            </h3>
            <div className="h-8" />
            <AboutButton />
          </section>
        </section>
      </main>
      <div className="panel h-screen w-full rounded-2xl bg-neutral-800"></div>
      <div className="panel h-screen w-full rounded-2xl bg-neutral-700"></div>
      <div className="panel h-screen w-full rounded-2xl bg-neutral-600"></div>
      <div className="panel h-screen w-full rounded-2xl bg-neutral-500"></div>
    </>
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
const AboutButton = () => {
  const [beingHovered, setBeingHovered] = useState<boolean>(false);
  const [arrowColor, setArrowColor] = useState<string>("");

  const handleMouseOver = () => {
    setBeingHovered(true);
    setArrowColor("black");
  };
  const handleMouseLeave = () => {
    setBeingHovered(false);
    setArrowColor("white");
  };

  return (
    <button
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`${styles.aboutBtn} aboutBtn relative group h-10 w-40 py-2 font-medium border rounded-full hover:bg-white/95 hover:text-black overflow-hidden flex justify-end items-center`}
    >
      <section className={`${styles.aboutContent} absolute w-fit h-full inline-flex items-center justify-center pointer-events-none`}>
        <div className="w-40 flex justify-center items-center">
          <ArrowRight size="32px" />
        </div>
        <div className="w-40 font-ibmPlexMono font-light flex justify-center items-center">
          ABOUT ME
        </div>
      </section>
    </button>
  );
};

export default Intro;
