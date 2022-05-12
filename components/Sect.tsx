import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Sect: React.FC<Props> = ({ children, className }) => {
  return <section className={` container  ${className} `}>{children}</section>;
};

export default Sect;
