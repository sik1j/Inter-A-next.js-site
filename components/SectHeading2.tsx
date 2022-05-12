import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectHeading2: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`text-text-dark font-bold text-sect2-heading ${className} leading-8 lg:text-lg-sect2-heading lg:leading-[3.125rem]`}
    >
      {children}
    </div>
  );
};

export default SectHeading2;
