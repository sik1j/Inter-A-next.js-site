import React from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import Card from "../Card";
import { UserGroupIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";
import { BookOpenIcon } from "@heroicons/react/solid";

interface Props {}

const Difference: React.FC<Props> = ({}) => {
  const cardsArr = [
    {
      title: "Participation in Community Service",
      info: "Participation in Community Service is a key value of the Inter-A program",
    },
    {
      title: "Field Trip supported Learning",
      info: "Field studies  are much more common in Inter-A than in a traditional high school",
    },
    {
      title: "Career and Personal Planning",
      info: "A class that teaches goal setting, planning, and personal responsibility",
    },
    {
      title: "Physical Education and Studio Arts",
      info: "Students have opportunities to practice their leadership in Physical Edcuation and Arts",
    },
  ];
  return (
    <Sect>
      <SectHeading>What Makes Us Different</SectHeading>
      <div className="space-y-11">
        <SectHeading2>
          We offer a variaty of different programs created to help enhance
          learning and success
        </SectHeading2>
        {cardsArr.map((cardsInfo: { title: string; info: string }, ind) => {
          return (
            <Card key={ind} title={cardsInfo.title} info={cardsInfo.info} />
          );
        })}
      </div>
    </Sect>
  );
};

export default Difference;
