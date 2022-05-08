import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectHeading: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-primary font-bold text-base mb-4">{children}</div>
  );
};

export default SectHeading;
