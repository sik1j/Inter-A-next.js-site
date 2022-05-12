import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const HeroHeading: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`text-text-dark font-bold text-lg ${className} lg:text-lg-hero-heading`}
    >
      {children}
    </div>
  );
};

export default HeroHeading;
