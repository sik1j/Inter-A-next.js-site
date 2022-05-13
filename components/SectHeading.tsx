import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const SectHeading: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`text-primary font-semibold text-base mb-4 lg:text-[1.375rem] lg:mb-6 ${className} `}
    >
      {children}
    </div>
  );
};

export default SectHeading;
