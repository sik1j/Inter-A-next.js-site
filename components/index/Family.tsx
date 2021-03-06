import React from "react";
import Button from "../Button";
import DiversitySVG from "../svg/DiversitySVG";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import SectText from "../SectText";

interface Props {}

const Family: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <div className="lg:grid lg:grid-cols-12">
        <div className="col-span-6">
          <SectHeading>Join Our Family</SectHeading>
          <SectHeading2>
            Smaller classes means a family like environment
          </SectHeading2>
        </div>
        <br />
        <div className="flex flex-col gap-4 -mt-8 lg:grid lg:grid-cols-12 lg:col-span-12 lg:pt-4 lg:gap-y-8 lg:gap-x-8 lg:-mt-0">
          <SectText className="col-span-6 mt-10">
            Think of Inter-A as being a high school “family.” It is a smaller
            setting in which you will get to know your classmates and teachers
            very well. You may not always get along with everyone in your
            family, but you do learn to treat each other with respect and to
            work together for a common goal.
          </SectText>
          <div className="mx-auto col-span-6">
            <DiversitySVG />
          </div>
          <SectText className="col-span-6">
            In a family you may focus on your own growth while helping others to
            develop their own unique skills and abilities. A family is a place
            where everyone contributes and where each person has their
            responsibilities.
          </SectText>
          <SectText className="col-span-6">
            {
              "It is a place you can belong and a place where you can grow your compassion and empathy. It is also a place where you can be yourself. Families celebrate each other's successes. Consider joining our family."
            }
          </SectText>
          <Button
            href="/apply"
            className="mt-10 w-fit mx-auto flex justify-center col-span-12"
            filled
            plus
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Sect>
  );
};

export default Family;
