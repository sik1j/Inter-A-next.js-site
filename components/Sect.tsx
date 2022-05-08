import React from "react";

interface Props {
  children: React.ReactNode;
}

const Sect: React.FC<Props> = ({ children }) => {
  return <section className="px-[5%] py-2">{children}</section>;
};

export default Sect;
