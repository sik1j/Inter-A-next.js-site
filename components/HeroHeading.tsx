import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeroHeading: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`text-text-dark font-bold text-lg ${className}`}>
      {children}
    </div>
  );
};

export default HeroHeading;
