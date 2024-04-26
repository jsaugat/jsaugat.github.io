"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import SAU from "@/components/assets/SAU";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// css
import styles from "./styles.module.scss";
import NavOverlay from "./NavOverlay";
import DownArrowBall from "../assets/DownArrowBall";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".navbar", {
      y: 50,
      opacity: 0,
      delay: 0.7,
      duration: 1.5,
      ease: "power4.out",
    });
  });
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".overlay", {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  });
  useEffect(() => {
    const body = document.body;
    console.log(body);
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.scrollY;
      // Scroll Up Above ViewPort
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }

      // Scroll Down
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      }
      // Scroll Up
      else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  });

  // Toggle Menu
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <header className="header relative pt-4 mb-14 w-full">
      {/* THE Nav */}
      <nav className="navbar fixed z-[5] w-[95.84vw] mx-[1rem] md:mx-[2rem] flex justify-between items-center">
        <section className="flex items-center gap-6">
          {/* My Logo */}
          <SAU className="SAU" />
          {/* Saugat Joshi */}
          <section className="flex flex-col cursor-pointer leading-tight gap-1">
            <p className="font-medium">Saugat Joshi</p>
            <div className="flex items-center gap-2">
              <mark className="bg-white size-[0.45rem]" />
              <p className="text-white/50 text-[0.8rem] font-ibmPlexMono font-light uppercase">
                Available for collab
              </p>
            </div>
          </section>
        </section>
        <section className="flex items-center gap-3">
          {/* PROJECTS button */}
          <Button
            variant="outlineStatic"
            className="projects-btn ml-10 p-1 pr-4 overflow-hidden rounded-full text-base flex justify-center gap-3"
          >
            <DownArrowBall className="projects-btn-ball" />
            <p className="projects-btn-text font-ibmPlexMono font-light tracking-normal">
              PROJECTS
            </p>
          </Button>
          <div className="flex items-center gap-2">
            {/* <h3 onClick={toggleMenu} className="cursor-pointer font-ibmPlexMono">
              MENU
            </h3> */}
            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className={`${styles.menuIcon} h-10 w-14 p-2 flex items-center justify-center rounded-full`}
            >
              <figure className="flex flex-col justify-center items-start gap-1 size-full">
                <div className="w-10 h-[0.1rem] bg-white"></div>
                <div className="w-10 h-[0.1rem] bg-white"></div>
              </figure>
            </button>
          </div>
        </section>
      </nav>
      {/* OVERLAY */}
      {menuIsOpen && (
        <NavOverlay toggleMenu={toggleMenu} menuLinks={menuLinks} />
      )}
    </header>
  );
}
