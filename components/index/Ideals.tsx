import React from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import { UserGroupIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/solid";
import HeroHeading from "../HeroHeading";
import SectHeading2 from "../SectHeading2";

interface Props {}

const Ideals: React.FC<Props> = ({}) => {
  return (
    <Sect className="w-full">
      <SectHeading>Our Key Ideals</SectHeading>
      <div className="flex flex-col justify-between items-start h-72 lg:flex-row lg:h-auto lg:mt-12 ">
        <div className="flex items-center">
          <UserGroupIcon className="h-2/3  mr-4 text-primary lg:h-14" />
          <div className="lg:hidden">
            <HeroHeading>Leadership</HeroHeading>
          </div>
          <div className="hidden lg:block">
            <SectHeading2>Leadership</SectHeading2>
          </div>
        </div>

        <div className="flex items-center">
          <HeartIcon className="h-2/3  mr-4 text-primary lg:h-14" />
          <div className="lg:hidden">
            <HeroHeading>Service</HeroHeading>
          </div>
          <div className="hidden lg:block">
            <SectHeading2>Service</SectHeading2>
          </div>
        </div>

        <div className="flex items-center">
          <BookOpenIcon className="h-2/3  mr-4 text-primary lg:h-14" />
          <div className="lg:hidden">
            <HeroHeading>Learning</HeroHeading>
          </div>
          <div className="hidden lg:block">
            <SectHeading2>Learning</SectHeading2>
          </div>
        </div>
      </div>
    </Sect>
  );
};

export default Ideals;
