import React from "react";
import Button from "./Button";

interface Props {
  title: string;
  info: string;
}

const Card: React.FC<Props> = ({ title, info }) => {
  return (
    <div className="flex flex-col justify-between space-y-3">
      <div className="font-bold text-sect2-heading text-primary">{title}</div>
      <div className="text-text-grey">{info}</div>
      <Button href="/" className="w-2/5">
        Learn More
      </Button>
    </div>
  );
};

export default Card;
