import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./style.module.scss";
import HackedAnimation from "../HackedAnimation";

interface MenuLink {
  label: string;
  href: string;
}

interface OverlayProps {
  toggleMenu: () => void;
  menuLinks: MenuLink[];
}

const NavOverlay: React.FC<OverlayProps> = ({ toggleMenu, menuLinks }) => {
  const socialLinks = [
    { href: "https://twitter.com/jsaugat_", media: "Twitter" },
    { href: "https://www.instagram.com/pyxelpainter", media: "Instagram" },
    { href: "https://www.linkedin.com/in/jsaugat", media: "LinkedIn" },
  ];
  const pathname = usePathname();

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.target as HTMLButtonElement;
    navigator.clipboard
      .writeText(button.innerText.toLowerCase())
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Could not copy text: ", error);
      });
  };

  return (
    <nav className="overlay fixed top-0 right-0 h-screen w-screen md:top-4 md:right-3 md:w-fit md:h-[96vh] z-10 rounded-lg text-white border border-white/20 bg-black md:bg-black/70 backdrop-blur-lg overflow-hidden flex justify-between">
      <main className="flex flex-col justify-between flex-1">
        {/* UPPER SECTION */}
        <section className="py-8 px-6 flex gap-12 items-start flex-1">
          {/* - DISCOVER */}
          <SectionTitle title="Discover" />
          {/* Navigation Links*/}
          <section className="flex-1 w-[22vw]">
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
                      >
                        <div
                          className={`w-fit font-neueRegrade font-bold text-5xl px-2 pt-2 rounded-sm uppercase ${
                            pathname === link.href
                              ? "bg-grin text-black"
                              : "hover:bg-white hover:text-black"
                          }`}
                        >
                          <HackedAnimation value={link.label} />
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </ul>
          </section>
        </section>
        {/* LOWER SECTION */}
        <section className="border-t pt-6 px-6 pb-8 flex gap-12 items-start">
          <SectionTitle title="Connect" />
          {/* Connect Info */}
          <section className="menu-info w-full flex flex-col gap-3">
            {/* Social Links */}
            <div className="menu-info-col font-jetBrains font-light text-sm uppercase flex flex-col items-start">
              {socialLinks.map(({ href, media }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  target="_blank"
                  className="text-xs p-3 py-1 cursor-alias rounded-full flex items-center gap-5"
                >
                  {media}
                </Link>
              ))}
            </div>
            <div className="menu-info-col font-jetBrains font-thin text-xs flex flex-col gap-1 flex-wrap">
              <span
                onClick={handleCopy}
                className="w-fit py-1 px-3 border rounded-full cursor-copy hover:bg-neutral-900 uppercase"
              >
                jsaugatt02.dev@gmail.com
              </span>
              <span
                onClick={handleCopy}
                className="w-fit py-1 px-3 border rounded-full cursor-copy hover:bg-neutral-900 "
              >
                +977 9803343112
              </span>
            </div>
          </section>
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="border overflow-hidden">
        <div
          onClick={toggleMenu}
          className="close-icon group p-4 size-12 text-xl border-b rounded-tr-sm font-medium cursor-pointer flex items-center justify-center hover:text-neutral-500"
        >
          <span className="group-hover:rotate-90 transition-all ease-out" >&#x2715;</span> 
        </div>
      </aside>
    </nav>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="size-[.35rem] bg-white" />
      <span className="text-[.7rem] uppercase font-jetBrains font-thin">
        <HackedAnimation value={title} />
      </span>
    </div>
  );
};

export default NavOverlay;
