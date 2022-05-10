import React from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import TestmonialCard from "../TestmonialCard";

interface Props {}

const Testimonial: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <SectHeading>Testmonial</SectHeading>
      <SectHeading2>
        Read what previous alumni had to say about the program
      </SectHeading2>
      <TestmonialCard name="Roger Blenman" position="Teacher of 5 years">
        This is the best freaking program I have ever been a part of in my whole
        life
      </TestmonialCard>
    </Sect>
  );
};

export default Testimonial;
