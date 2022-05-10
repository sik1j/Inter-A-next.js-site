import React, { Children } from "react";
import SectText from "./SectText";

interface Props {
  children: React.ReactNode;
  name: string;
  position: string;
}

const TestmonialCard: React.FC<Props> = ({ children, name, position }) => {
  return (
    <div>
      <SectText>{children}</SectText>
      <div className="font-bold text-md ">{name}</div>
      <div className="text-text-gray ">{position}</div>
    </div>
  );
};

export default TestmonialCard;
