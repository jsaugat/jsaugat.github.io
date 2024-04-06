import React from "react";
import { Button } from "@/components/ui/button.jsx";
import { NavLink } from "react-router-dom";
import SAU from "@/assets/SAU.jsx";
import SAUSTROKE from "@/assets/SAUSTROKE.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    const animation = gsap.timeline();
    animation
    .from("nav", {
      y: 50,
      opacity: 0,
      delay: 0.7,
      duration: 1.5,
      ease: "power4.out",
    })
  });
  const now = new Date();
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedTime = now.toLocaleTimeString("en-US", options);
  return (
    <nav className="relative flex justify-between items-center pt-8 mb-10 font-montreal">
      <div className="flex items-center gap-12">
        {/* My Logo */}
        <SAU className="SAU" />
        {/* <SAUSTROKE className="" /> */}
        {/* Saugat Joshi */}
        <div className="leading-8 cursor-pointer">
          <span>Saugat Joshi</span>
          <br />
          <span className="text-white/50 text-sm">Availble for collab__</span>
        </div>
      </div>
      {/* time */}
      <div className="border rounded-full px-5 py-3">{formattedTime}</div>
      {/* Nav Menu */}
      <ul className="flex gap-[2rem] items-center ">
        <li className="text-white/50">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-white" : null)}
          >
            Home
          </NavLink>
        </li>
        <li className="text-white/50">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-white" : null)}
          >
            About
          </NavLink>
        </li>
        <li className="text-white/50">
          {/* <NavLink to="">Work</NavLink> */}Works
        </li>
        <Button variant="outline" className="border-onyx">
          Connect
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
