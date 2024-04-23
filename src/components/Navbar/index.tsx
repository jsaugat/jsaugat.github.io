"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import SAU from "@/assets/SAU";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// css
import style from "./style.module.scss";
import NavOverlay from "./NavOverlay";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Navbar () {
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

  // Toggle Menu
  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  // Current Time
  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <main className="relative pt-4 mb-14 w-full">
      {/* THE Nav */}
      <nav className="navbar fixed z-[40] w-[95.84vw] flex justify-between items-center">
        <div className="flex items-center gap-6">
          {/* My Logo */}
          <SAU className="SAU" />
          {/* Saugat Joshi */}
          <div className="flex flex-col cursor-pointer leading-tight">
            <span className="font-medium">Saugat Joshi</span>
            <div className="flex items-center gap-1">
              {/* <div className="green-indicator rounded-full bg-green-500/40 size-4 flex justify-center items-center">
              <div className="rounded-full bg-green-600 size-2"></div>
            </div> */}
              <span className="text-white/50 text-[0.92rem]">
                Available for collab __
              </span>
            </div>
          </div>
        </div>
        {/* time */}
        {/* <div className="border rounded-full px-3 py-2">{formattedTime}</div> */}
        <div className="flex items-center gap-2">
          <h3 onClick={toggleMenu} className="cursor-pointer">
            MENU
          </h3>
          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className={`${style.menuIcon} h-10 w-14 p-2 flex items-center justify-center rounded-full`}
          >
            <figure className="flex flex-col justify-center items-start gap-1 size-full">
              <div className="w-10 h-[0.1rem] bg-white"></div>
              <div className="w-10 h-[0.1rem] bg-white"></div>
            </figure>
          </button>
        </div>
      </nav>
      {/* OVERLAY */}
      {menuIsOpen && <NavOverlay toggleMenu={toggleMenu} menuLinks={menuLinks} />}
    </main>
  );
};
