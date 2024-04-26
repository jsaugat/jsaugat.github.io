export default function InnovativeSection() {
  const innovative = "INNOVATIVE"
    .split("")
    .map((letter, i) => <span key={i}>{letter}</span>);

  return (
    <section className="flex w-full">
      <aside className="flex-1" />
      <section className="innovativeDiv relative pt-4 leading-[0.9] overflow-hidden h-[6rem] w-[40rem] flex flex-col justify-start cursor-crosshair">
        <div className="innovativeUpperDiv flex -space-x-[0.1rem]">
          {innovative}
        </div>
        <div className={"innovativeLowerDiv relative flex -space-x-[0.1rem]"}>
          {/* <HeaderTitle>
            01S
          </HeaderTitle> */}
          {innovative}
        </div>
      </section>
      <aside className="flex-1" />
    </section>
  );
}