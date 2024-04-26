import { Codepen, Globe, Hourglass } from "lucide-react";

export default function FullstackSection() {
  // Current Time
  const now = new Date();
  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const fullstack = "FULLSTACK"
    .split("")
    .map((letter, idx) => <span key={idx}>{letter}</span>);
  return (
    //? the bordered box
    <section className="relative border-y left-0 flex justify-center w-full">
      <aside className="flex-1 flex items-center justify-start">
        {/* **** */}
        <div className="ml-10 h-7 text-[0.8rem] tracking-normal text-white/40 flex items-center gap-1">
          <Codepen strokeWidth={"1.2px"} size="15px" />
          <span className="font-ibmPlexMono text-[.8rem] font-light">
            //PORTFOLIO 2024
          </span>
        </div>
      </aside>
      <main className="fullstackDiv relative pt-4 pr-5 leading-[0.9] overflow-hidden h-[6rem] w-[40rem] cursor-crosshair justify-start items-end flex flex-col">
        <div className="fullstackUpperDiv flex -space-x-[0.1rem]">
          {fullstack}
        </div>
        <div className="fullstackLowerDiv flex -space-x-[0.1rem]">
          {fullstack}
        </div>
      </main>
      <aside className="flex-1 flex items-center justify-end">
        <section className="h-10 mr-10  flex flex-col">
          {/* LOCATION */}
          <div className="h-5 p-0 text-white/40 inline-flex items-center gap-1">
            <Globe strokeWidth={"1.2px"} size="15px" />
            <span className="font-ibmPlexMono text-[0.8rem] font-light tracking-normal uppercase">
              //Based in Kathmandu
            </span>
          </div>
          {/* TIME */}
          <div className="h-5 p-0 font-ibmPlexMono text-[.8rem] font-light text-white/40 tracking-normal flex items-center justify-end gap-1">
            <Hourglass strokeWidth={"1.2px"} size="15px" />
            <span>//{formattedTime}</span>
          </div>
        </section>
      </aside>
    </section>
  );
}
