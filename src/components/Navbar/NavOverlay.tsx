import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import style from "./style.module.scss";
import HackedAnimation from "../HackedAnimation/HackedAnimation";

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
    <main className="absolute z-10 top-0 left-0 h-screen w-screen bg-transparent backdrop-blur-md">
      <nav className="overlay fixed z-[999] top-0 right-0 h-screen w-screen md:top-4 md:right-2 md:w-fit md:h-[96vh] rounded-lg text-white border border-white/30 bg-black backdrop-blur-lg overflow-hidden flex justify-between">
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
                    <div className="menu-item mb-2">
                      <div className="menu-item-holder">
                        <Link
                          key={idx}
                          href={link.href}
                          // className=""
                        >
                          <div
                            className={`w-fit font-neueRegrade font-bold text-5xl px-2 pt-2 rounded-sm uppercase transition duration-3000 ease-in-out ${
                              pathname === link.href
                                ? "bg-grin text-black"
                                : "hover:bg-white hover:text-black"
                            }`}
                          >
                            <HackedAnimation
                              value={link.label}
                              bgAnimation={false}
                            />
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
                    <HackedAnimation value={media} bgAnimation={true} />
                  </Link>
                ))}
              </div>
              <div className="menu-info-col font-jetBrains font-thin text-xs flex flex-col gap-1 flex-wrap">
                <button
                  onClick={handleCopy}
                  className="w-fit py-1 px-3 border rounded-full cursor-copy hover:bg-neutral-900 uppercase flex gap-2"
                >
                  <MailIcon color="white" />
                  <span>jsaugatt02.dev@gmail.com</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="w-fit py-1 px-3 border rounded-full cursor-copy hover:bg-neutral-900 flex gap-2"
                >
                  <PhoneIcon color="white" />
                  <span>+977 9803343112</span>
                </button>
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
            <span className="group-hover:rotate-90 transition-all ease-out">
              &#x2715;
            </span>
          </div>
        </aside>
      </nav>
    </main>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <main className="flex gap-2 items-center">
      <div className="size-[.35rem] bg-white" />
      <span className="text-[.7rem] uppercase font-jetBrains font-thin cursor-default">
        <HackedAnimation value={title} bgAnimation={false} />
      </span>
    </main>
  );
};

const MailIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={14}
    height={14}
    color={color}
    fill={"none"}
  >
    <path
      d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const PhoneIcon = ({ color }: { color: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={14}
      height={14}
      color={color}
      fill={"none"}
    >
      <path
        d="M5 9C5 5.70017 5 4.05025 6.02513 3.02513C7.05025 2 8.70017 2 12 2C15.2998 2 16.9497 2 17.9749 3.02513C19 4.05025 19 5.70017 19 9V15C19 18.2998 19 19.9497 17.9749 20.9749C16.9497 22 15.2998 22 12 22C8.70017 22 7.05025 22 6.02513 20.9749C5 19.9497 5 18.2998 5 15V9Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M11 19H13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 2L9.089 2.53402C9.28188 3.69129 9.37832 4.26993 9.77519 4.62204C10.1892 4.98934 10.7761 5 12 5C13.2239 5 13.8108 4.98934 14.2248 4.62204C14.6217 4.26993 14.7181 3.69129 14.911 2.53402L15 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NavOverlay;
