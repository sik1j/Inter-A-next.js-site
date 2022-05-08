import React from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import { UserGroupIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/solid";

interface Props {}

const Ideals: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <SectHeading>Our Key Ideals</SectHeading>
      <div className="flex flex-col justify-between items-start h-72 ">
        <div className="flex items-center">
          <UserGroupIcon className="h-2/3  mr-4 text-primary" />
          <SectHeading2>Leadership</SectHeading2>
        </div>

        <div className="flex items-center">
          <HeartIcon className="h-2/3  mr-4 text-primary" />
          <SectHeading2>Service</SectHeading2>
        </div>

        <div className="flex items-center">
          <BookOpenIcon className="h-2/3  mr-4 text-primary" />
          <SectHeading2>Learning</SectHeading2>
        </div>
      </div>
    </Sect>
  );
};

export default Ideals;
