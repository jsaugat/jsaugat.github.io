"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import SAU from "@/assets/SAU";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const pathname = usePathname();
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from("nav", {
      y: 50,
      opacity: 0,
      delay: 0.7,
      duration: 1.5,
      ease: "power4.out",
    })
  });

  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <nav className="relative flex justify-between items-center pt-4 mb-6">
      <div className="flex items-center gap-6">
        {/* My Logo */}
        <SAU className="SAU" />
        {/* Saugat Joshi */}
        <div className="flex flex-col cursor-pointer leading-tight">
          <span className="font-medium">Saugat Joshi</span>
          <div className="flex items-center gap-1">
            <div className="green-indicator rounded-full bg-green-500/40 size-4 flex justify-center items-center">
              <div className="rounded-full bg-green-600 size-2"></div>
            </div>
            <span className="text-white/50 text-[0.92rem]">
              Available for collab __
            </span>
          </div>
        </div>
      </div>
      {/* time */}
      <div className="border rounded-full px-3 py-2 te">{formattedTime}</div>
      {/* Nav Menu */}
      <ul className="flex gap-5 items-center text-base">
        <Link
          href="/"
          className={`${pathname === "/" ? "text-white" : "text-white/50"}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`link ${
            pathname === "/about" ? "text-white" : "text-white/50"
          }`}
        >
          About
        </Link>
        <Link
          href="/about"
          className={`link ${
            pathname === "/projects" ? "text-white" : "text-white/50"
          }`}
        >
          Projects
        </Link>
        <Button variant="secondary" className="border rounded-full">
          Connect
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
