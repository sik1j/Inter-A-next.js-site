import React from "react";

interface Props {
  children: React.ReactNode;
}

const SectText: React.FC<Props> = ({ children }) => {
  return <div className="text-md leading-8 text-text-grey">{children}</div>;
};

export default SectText;
