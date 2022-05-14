import React from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import Card from "../Card";
import { UserGroupIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/solid";
import ThinkingSVG from "../svg/ThinkingSVG";
import { CARDS_DATA } from "../../mock/mock-card-data";

interface Props {}

const Difference: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <SectHeading>What Makes Us Different</SectHeading>
      <div className="space-y-11 grid lg:grid-cols-12 lg:space-y-0 lg:gap-8">
        <div className="lg:col-span-6">
          <SectHeading2>
            We offer a variaty of different programs created to help enhance
            learning and success
          </SectHeading2>
          <div className="hidden lg:block">
            <ThinkingSVG />
          </div>
        </div>
        <div className="space-y-11 lg:col-span-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-y-20 lg:pb-10 lg:gap-x-8">
          {CARDS_DATA.map(({ title, info }, ind) => {
            return <Card key={ind} title={title} info={info} />;
          })}
        </div>
      </div>
    </Sect>
  );
};

export default Difference;
