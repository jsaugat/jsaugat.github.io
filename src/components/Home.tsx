"use client"

import React, { useRef } from "react";
import DownRight from "@/assets/DownRight";
import { Button } from "@/components/ui/button";
import DownArrowBall from "@/assets/DownArrowBall";
import Intro from "@/components/Intro";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const hero = useRef<HTMLElement>(null);
  useGSAP(homeAnimation, { scope: hero });
  return (
    <main>
      <section
        ref={hero}
        className="home relative flex justify-center rounded-[5rem] border border-ghost w-full h-[85vh] font-montreal overflow-hidden"
      >
        {/* absolute BOX */}
        {/* <div className="absolute top-[30%] border-ghost border-y w-full h-[10rem]"></div> */}

        {/* HERO HEADERS */}
        <main className="relative h-fit text-center top-[12vh] text-[10rem] text-antiFlash font-neueRegrade font-semibold leading-[10rem] tracking-tighter cursor-crosshair select-none flex flex-col items-center w-full">
          <InnovativeSection />
          <FullstackSection />
          <DeveloperSection />
        </main>
        {/*  */}
        <div className="down-right absolute inline-flex items-center justify-center bottom-[12%] w-[9rem] h-[9rem] rounded-full border border-white">
          <DownRight className="" />
        </div>
      </section>
      <Intro />
    </main>
  );
}

function InnovativeSection() {
  return (
    <section className="flex w-full">
      <aside className="flex-auto" />
      <section className="innovativeDiv relative leading-[0.9] overflow-hidden h-[10rem] w-[64rem] flex flex-col  justify-start pt-4">
        <div className="flex innovativeUpperDiv -space-x-[0.1rem]">
          <span>I</span>
          <span>N</span>
          <span>N</span>
          <span>O</span>
          <span>V</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>V</span>
          <span>E</span>
        </div>
        <div className="flex innovativeLowerDiv -space-x-[0.1rem]">
          <span>I</span>
          <span>N</span>
          <span>N</span>
          <span>O</span>
          <span>V</span>
          <span>A</span>
          <span>T</span>
          <span>I</span>
          <span>V</span>
          <span>E</span>
        </div>
      </section>
      <aside className="flex-auto" />
    </section>
  );
}
function FullstackSection() {
  return (
    <section className="relative top-[30%] border-ghost border-y h-[10rem] left-0 flex justify-center w-full">
      <aside className="flex-auto flex items-center justify-start pl-[4vw]">
        {/* PROJECTS button */}
        <Button
          variant="outline"
          className="projects-btn flex justify-between px-4 pr-6 gap-4 border border-onyx overflow-hidden"
        >
          <DownArrowBall className="projects-btn-ball" />
            <p className="projects-btn-text text-[1.5rem] font-medium font-montreal">PROJECTS</p>
        </Button>
      </aside>
      <section className="fullstackDiv relative pt-4 pr-5 leading-[0.9] overflow-hidden h-[10rem] w-[64rem] justify-start items-end flex flex-col">
        <div className="fullstackUpperDiv flex -space-x-[0.1rem]">
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
        </div>
        <div className="fullstackLowerDiv flex -space-x-[0.1rem]">
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <span>L</span>
          <span>S</span>
          <span>T</span>
          <span>A</span>
          <span>C</span>
          <span>K</span>
        </div>
        {/* <h1 className="headers fullstack text-right">FULLSTACK</h1> */}
      </section>
      <aside className="flex-auto" />
    </section>
  );
}
function DeveloperSection() {
  return (
    <main className="flex w-full">
      <aside className="flex-auto" />
      <section className="developerDiv relative leading-[0.9] overflow-hidden h-[10rem] w-[64rem] flex flex-col  justify-start pt-4">
        <div className="developerUpperDiv flex -space-x-[0.1rem]">
          <span>D</span>
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
        </div>
        <div className="developerLowerDiv flex -space-x-[0.1rem]">
          <span>D</span>
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>L</span>
          <span>O</span>
          <span>P</span>
          <span>E</span>
          <span>R</span>
        </div>
      </section>
      <aside className="relative flex-auto flex items-center text-left">
        <div className="description absolute -left-40 text-[1.9rem] leading-9 tracking-normal font-montreal font-medium flex flex-col">
          {/* lines animate-in from 'y: 30' */}
          <div className="overflow-hidden">
            <p className="description-1">
              I use my profound enthusiasm for both
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="description-2">design and backend development to</p>
          </div>
          <div className="overflow-hidden">
            <p className="description-3">
              drive success in fullstack development.
            </p>
          </div>
        </div>
      </aside>
    </main>
  );
}
function homeAnimation() {
  const yDistForHeroHeaders = -89;
  const innovativeUpper = Array.from(
    { length: "innovative".length },
    (_, i) => `.innovativeUpperDiv span:nth-child(${i + 1})`
  );
  const innovativeLower = Array.from(
    { length: "innovative".length },
    (_, i) => `.innovativeLowerDiv span:nth-child(${i + 1})`
  );
  const fullstackUpper = Array.from(
    { length: "FULLSTACK".length },
    (_, i) => `.fullstackUpperDiv span:nth-child(${i + 1})`
  );
  const fullstackLower = Array.from(
    { length: "FULLSTACK".length },
    (_, i) => `.fullstackLowerDiv span:nth-child(${i + 1})`
  );
  const developerUpper = Array.from(
    { length: "DEVELOPER".length },
    (_, i) => `.developerUpperDiv span:nth-child(${i + 1})`
  );
  const developerLower = Array.from(
    { length: "DEVELOPER".length },
    (_, i) => `.developerLowerDiv span:nth-child(${i + 1})`
  );

  const tl = gsap.timeline();
  tl.to(
    innovativeUpper,
    {
      y: yDistForHeroHeaders,
      delay: (i) => 0 + i * 0.04,
      ease: "power1.out",
    },
    "0.2"
  )
    .to(
      innovativeLower,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power1.out",
      },
      "<"
    )
    .to(
      fullstackUpper,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power1.out",
      },
      "<0.2"
    )
    .to(
      fullstackLower,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power1.out",
      },
      "<"
    )
    .to(
      developerUpper,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power1.out",
      },
      "<0.3"
    )
    .to(
      developerLower,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power1.out",
      },
      "<"
    )
    .from(
      ".projects-btn-text",
      {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      },
      "<0.1"
    )
    .from(
      ".description .description-1, .description-2, .description-3",
      {
        opacity: 0,
        y: 34,
        duration: 1.3,
        ease: "power4.out",
      },
      "<"
    );
}
