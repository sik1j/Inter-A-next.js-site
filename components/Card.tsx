import React from "react";
import Button from "./Button";

interface Props {
  title: string;
  info: string;
}

const Card: React.FC<Props> = ({ title, info }) => {
  return (
    <div className="flex flex-col justify-between space-y-3 lg:justify-between lg:space-y-0">
      <div className="font-bold text-sect2-heading text-primary">{title}</div>
      <div className="text-text-grey max-w-prose lg:pt-0">{info}</div>
      <Button href="/" className="w-fit" chevron>
        Learn More
      </Button>
    </div>
  );
};

export default Card;
