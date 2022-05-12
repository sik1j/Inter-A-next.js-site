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
      <div className="lg:flex ">
        <div className="flex-1">
          <SectHeading className="font-bold">
            Inter-A: Tomorrow's Leaders Today
          </SectHeading>
          <HeroHeading>Creating Future Leaders In Today's World</HeroHeading>
          <SectText>
            A high school program for students to receive an education that
            challenges them to Learn, Lead, and Engage.
          </SectText>
          <div className="flex flex-col mt-6 sm:flex-row sm:justify-between  sm:gap-12 lg:items-center lg:justify-start">
            <Button
              href="/apply"
              className="flex justify-center sm:flex-1 lg:flex-initial"
              filled
              plus
            >
              Apply
            </Button>
            {/* <Link href={"/"}>
              <a className="self-center mt-6 text-md lg:mt-0">Our Differences</a>
            </Link> */}
            <Button
              chevron
              href="/"
              className="flex justify-center mt-6 sm:flex-1 sm:mt-0 lg:flex-initial "
            >
              Our Differences
            </Button>
          </div>
        </div>
        <div className="hidden flex-1  lg:block "></div>
      </div>
    </Sect>
  );
};

export default Hero;
