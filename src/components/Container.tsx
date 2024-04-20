import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-[1rem] md:mx-[2rem]">{children}</div>;
};

export default Container;
