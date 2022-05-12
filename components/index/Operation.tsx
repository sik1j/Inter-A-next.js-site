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
      <div className="relative space-y-8 lg:grid lg:grid-cols-12 lg:gap-x-4">
        <div className="col-span-7">
          <SectText>
            The Inter-A Program is like a “school within a school.” We are an
            academic program that provides a high school education to a group of
            about 170.{" "}
          </SectText>
        </div>
        <div className="font-bold text-primary text-6xl text-center leading-[6rem] lg:col-span-4 lg:col-end-13 lg:absolute lg:right-0  lg:top-0 lg:bottom-8 lg:flex lg:items-center lg:leading-[8.5rem]">
          {'"A School'} <br /> Within <br className="lg:hidden" /> {'a School"'}
        </div>
        <div className="col-span-7">
          <SectText>
            These students and their teachers have chosen to participate in a
            challenging alternative to a traditional high school education. Open
            classrooms, cooperative learning, student leadership, and personal
            responsibility are some of our key values. Volunteer work, peer
            tutoring, diversity, and project-based learning are also Integral to
            our program?
          </SectText>
        </div>
      </div>
    </Sect>
  );
};

export default Operation;
