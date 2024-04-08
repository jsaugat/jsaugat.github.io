"use client"

import React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button";
import SAU from "@/assets/SAU";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const pathname = usePathname();
  useGSAP(() => {
    console.log(pathname)
    const animation = gsap.timeline();
    animation.from("nav", {
      y: 50,
      opacity: 0,
      delay: 0.7,
      duration: 1.5,
      ease: "power4.out",
    });
  });

  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <nav className="relative flex justify-between items-center pt-8 mb-10 font-montreal">
      <div className="flex items-center gap-12">
        {/* My Logo */}
        <SAU className="SAU" />
        {/* Saugat Joshi */}
        <div className="leading-8 cursor-pointer">
          <span>Saugat Joshi</span>
          <br />
          <span className="text-white/50 text-sm">Available for collab__</span>
        </div>
      </div>
      {/* time */}
      <div className="border rounded-full px-5 py-3">{formattedTime}</div>
      {/* Nav Menu */}
      <ul className="flex gap-[2rem] items-center">
          <Link href="/" className={`${pathname === '/' ? 'text-white' : 'text-white/50'}`} >Home
          </Link>
          <Link href="/about" className={`link ${pathname === '/about' ? 'text-white' : 'text-white/50'}`} >About
          </Link>
        <li className="text-white/50">Works</li>
        <li>
          <Button variant="outline" className="border-onyx">
            Connect
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
