"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import SAU from "@/assets/SAU";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// css
import styles from "./styles.module.scss";

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "projects", label: "Projects" },
];

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // const pathname = usePathname();
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
    <main className="relative pt-4 mb-5">
      <section className="navbar flex justify-between items-center ">
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
          MENU
          <button
            onClick={toggleMenu}
            className={`${styles.menuIcon} h-10 w-fit p-2 flex items-center justify-center rounded-full`}
          >
            <figure className="flex flex-col justify-center items-start gap-1 size-full">
              <div className="w-10 h-[0.1rem] bg-white"></div>
              <div className="w-10 h-[0.1rem] bg-white"></div>
            </figure>
          </button>
        </div>
      </section>
      {/* OVERLAY */}
      {menuIsOpen && <Overlay toggleMenu={toggleMenu} />}
    </main>
  );
};

interface OverlayProps {
  toggleMenu: () => void;
}

// OVERLAY
const Overlay: React.FC<OverlayProps> = ({ toggleMenu }) => {
  return (
    <nav className="fixed top-0 right-0 h-[50vh] m-5 p-8 z-10 rounded-2xl text-black bg-[#C0FB50] flex flex-col justify-between ">
      <div>
        <section className="overlay-bar flex justify-between">
          <h1 className="text-3xl font-medium">SaU</h1>
          <div
            onClick={toggleMenu}
            className="close-icon text-xl font-medium cursor-pointer"
          >
            Close
          </div>
        </section>
        {/* NAV SECTION */}
        <ul
          className={
            styles.menuItems +
            "relative left-10 text-left flex flex-col gap-1 items-center justify-start"
          }
        >
          <div className="bg-red-600/0">
            {menuLinks.map((link, idx) => (
              <div className="menu-item">
                <div className="menu-item-holder">
                  <Link
                    key={idx}
                    href={link.href}
                    className="uppercase text-black text-5xl font-medium"
                  >
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </ul>
      </div>
      {/* INFO SECTION */}
      <section className="menu-info w-full flex justify-between">
        <div className="menu-info-col font-jetBrains text-sm uppercase flex items-center gap-2">
          <Link href="" className="border p-3 py-1 rounded-full">
            Twitter
          </Link>
          <i>/</i>
          <Link href="" className="border p-3 py-1 rounded-full">
            LinkedIn
          </Link>
          <i>/</i>
          <Link href="" className="border p-3 py-1 rounded-full">
            Dribbble
          </Link>
        </div>
        <div className="menu-info-col">
          <p>jsaugatt02.dev@gmail.com</p>
          <p>+977 9803343112</p>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
