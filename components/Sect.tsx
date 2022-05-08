import React from "react";

interface Props {
  children: React.ReactNode;
}

const Sect: React.FC<Props> = ({ children }) => {
  return <section className="px-[5vw] py-2">{children}</section>;
};

export default Sect;
