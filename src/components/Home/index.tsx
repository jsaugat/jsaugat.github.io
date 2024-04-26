"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDownRight, ChevronsUpDown } from "lucide-react";
import styles from "./styles.module.scss";
import InnovativeSection from "./Header1";
import FullstackSection from "./Header2";
import DeveloperSection from "./Header3";

gsap.defaults({ ease: "none", duration: 0.8 });

export default function Home() {
  const hero = useRef<HTMLElement>(null);
  useGSAP(homeAnimation, { scope: hero });

  return (
    <main
      ref={hero}
      className="home relative flex justify-center rounded-[2rem] md:rounded-[3rem] border border-ghost w-full h-[85vh] font-montreal overflow-hidden"
    >
      {/* HERO HEADERS */}
      <main className="relative h-fit text-center top-[12vh] text-[6rem] text-antiFlash font-neueRegrade font-semibold leading-[10rem] tracking-tighter select-none flex flex-col items-center w-full">
        <InnovativeSection />
        <FullstackSection />
        <DeveloperSection />
      </main>

      {/* ARROW SCROLLER */}
      <button
        className={`${styles.arrowDownRightBtn} absolute bottom-[12%] size-[6rem] rounded-full border border-white flex items-center justify-center`}
      >
        <ArrowDownRight
          size={"60px"}
          strokeWidth={"0.5"}
          className={`${styles.arrowDownRightIcon}`}
        />
      </button>
      {/* SCROLL */}
      <div className="absolute right-10 bottom-8 text-white/40 flex items-center gap-1">
        <span className="font-ibmPlexMono text-[.8rem] font-light">SCROLL</span>
        <ChevronsUpDown strokeWidth={"1.2px"} size="15px" />
      </div>
    </main>
  );
}

const HeaderTitle = ({ children }: { children: string }) => (
  <section className="absolute -top-3 -left-3">{children}</section>
);

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
      ease: "power4.out",
    },
    "0.5"
  )
    .to(
      innovativeLower,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power4.out",
      },
      "<"
    )
    .to(
      fullstackUpper,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power4.out",
      },
      "<0.3"
    )
    .to(
      fullstackLower,
      {
        y: yDistForHeroHeaders,
        delay: (i) => 0 + i * 0.04,
        ease: "power4.out",
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
    // the descriptions next to "DEVELOPER"
    .from(
      ".description-1, .description-2, .description-3",
      {
        opacity: 0,
        y: 34,
        duration: 1.3,
        ease: "power4.out",
      },
      "<0.6"
    );
}
