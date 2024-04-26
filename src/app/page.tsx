"use client"

import Home from "@/components/Home";
import Intro from "@/components/Intro";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Home />
      <Intro />
    </main>
  );
}
