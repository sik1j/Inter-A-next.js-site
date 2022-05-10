import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Sect: React.FC<Props> = ({ children, className }) => {
  return (
    <section className={`px-[5vw] py-2 relative ${className}`}>
      {children}
    </section>
  );
};

export default Sect;
