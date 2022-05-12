import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectText: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`text-md leading-8 text-text-grey lg:text-lg-sect-text lg:leading-9 ${className}`}
    >
      {children}
    </div>
  );
};

export default SectText;
