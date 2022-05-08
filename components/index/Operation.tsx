import React from "react";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import SectText from "../SectText";
import Sect from "../Sect";

interface Props {}

const Operation: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <SectHeading>How We Operate</SectHeading>
      {/* <SectHeading2>
        "A School <br />
        Within a School"
      </SectHeading2> */}
      <div className="space-y-8">
        <SectText>
          The Inter-A Program is like a “school within a school.” We are an
          academic program that provides a high school education to a group of
          about 170.{" "}
        </SectText>
        <div className="font-bold text-primary text-6xl text-center leading-[6rem]">
          "A School <br /> Within <br /> A School"
        </div>
        <SectText>
          These students and their teachers have chosen to participate in a
          challenging alternative to a traditional high school education. Open
          classrooms, cooperative learning, student leadership, and personal
          responsibility are some of our key values. Volunteer work, peer
          tutoring, diversity, and project-based learning are also Integral to
          our program?
        </SectText>
      </div>
    </Sect>
  );
};

export default Operation;
