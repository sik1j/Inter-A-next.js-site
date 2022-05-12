import React from "react";
import Button from "../Button";
import HeroHeading from "../HeroHeading";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import SectText from "../SectText";

interface Props {}

const Hero: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <div className="lg:grid lg:grid-cols-12 lg:place-content-center">
        <SectHeading className="col-span-12 lg:text-center">
          About Us
        </SectHeading>
        <HeroHeading className="col-span-12 lg:text-center">
          Welcome to the Inter-A Program
        </HeroHeading>
        <SectText className="col-span-8 col-start-3 mt-8 lg:text-center ">
          Inter-A is Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem nemo esse voluptatum corporis pariatur fugiat, atque
          dignissimos quo repudiandae alias, repellat natus aliquam praesentium
          molestias iure nihil? Atque, delectus necessitatibus!
        </SectText>
      </div>
    </Sect>
  );
};

export default Hero;
