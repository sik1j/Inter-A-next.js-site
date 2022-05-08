import React from "react";
import Button from "../Button";
import Link from "next/link";
import SectHeading from "../SectHeading";
import HeroHeading from "../HeroHeading";
import SectText from "../SectText";
import Sect from "../Sect";

interface Props {}

const Hero: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <SectHeading>Hello,</SectHeading>
      <HeroHeading>We Help People To Bring Their Ideas Alive</HeroHeading>
      <SectText>
        A talented team to help you in your journey on creating usefull and easy
        to use product
      </SectText>
      <div className="flex flex-col mt-6">
        <Button href="/apply" className="text-center" filled plus>
          Let's Talk
        </Button>
        <Link href={"/"}>
          <a className="self-center mt-6 text-md">Check our Services</a>
        </Link>
      </div>
    </Sect>
  );
};

export default Hero;
