export default function DeveloperSection() {
  const developer = "DEVELOPER"
    .split("")
    .map((letter, idx) => <span key={idx}>{letter}</span>);
  return (
    <main className="flex w-full">
      {/* //? side box */}
      <aside className="flex-1" />
      {/* //? main part */}
      <section className="developerDiv relative pt-4 leading-[0.9] overflow-hidden h-[6rem] w-[40rem] cursor-crosshair flex flex-col justify-start">
        <div className="developerUpperDiv flex -space-x-[0.1rem]">
          {developer}
        </div>
        <div className="developerLowerDiv flex -space-x-[0.1rem]">
          {developer}
        </div>
      </section>
      {/* //? side box */}
      <aside className="relative text-left flex items-center flex-1">
        <section className="description absolute -left-[8.4rem] text-lg font-neueHaas font-medium leading-tight tracking-normal flex flex-col">
          {/* lines animate-in from 'y: 30' */}
          <div>
            {[
              "I use my profound enthusiasm for both",
              "design and backend development to",
              "drive success in fullstack development.",
            ].map((description, index) => (
              <div key={index} className="overflow-hidden font-neueHaas">
                <p className={`description-${index + 1}`}>{description}</p>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </main>
  );
}