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

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

const Navbar = () => {
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
  const socialLinks = [
    { href: "https://twitter.com/jsaugat_", media: "Twitter" },
    { href: "https://www.instagram.com/pyxelpainter", media: "Instagram" },
    { href: "https://www.linkedin.com/in/jsaugat", media: "LinkedIn" },
  ];
  const pathname = usePathname();
  return (
    <nav className="overlay fixed top-0 right-0 h-[94vh] m-5 p-8 z-10 rounded-lg text-white border border-white/30 bg-black/30 backdrop-blur-md flex flex-col justify-between ">
      <div>
        <section className="overlay-bar flex justify-between">
          <h1 className="text-3xl font-medium"></h1>
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
            style.menuItems +
            "relative left-10 text-left flex flex-col gap-1 items-start justify-start"
          }
        >
          <div className="bg-red-600/0">
            {menuLinks.map((link, idx) => (
              <div className="menu-item mb-5">
                <div className="menu-item-holder">
                  <Link
                    key={idx}
                    href={link.href}
                    // className=""
                    className={`font-neueRegrade font-bold text-5xl px-2 pt-2 rounded-md uppercase  ${
                      pathname === link.href
                        ? "bg-grin text-black hover:bg-grin"
                        : "hover:bg-white hover:text-black"
                    }`}
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
      <section className="menu-info w-full flex flex-col gap-3">
        <div className="menu-info-col font-jetBrains font-light text-sm uppercase flex items-center gap-2">
          {socialLinks.map(({ href, media }, idx) => (
            <div className="p-3 py-1 rounded-full bg-white/20 flex items-center gap-5">
              <p>{idx + 1}.0</p>
              <Link key={idx} href={href} target="_blank">
                {media}
              </Link>
            </div>
          ))}
        </div>
        <div className="menu-info-col font-medium">
          <p>jsaugatt02.dev@gmail.com</p>
          <p>+977 9803343112</p>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
