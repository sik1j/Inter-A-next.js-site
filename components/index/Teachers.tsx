import React from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import SectText from "../SectText";

interface Props {}

const Teachers: React.FC<Props> = ({}) => {
  return (
    <Sect>
      <SectHeading>The Teachers Behind Inter-A</SectHeading>
      <SectHeading2>
        A team of passionate educators helping students learn as individuals
      </SectHeading2>
      <br />
      <SectText>
        Our team of heartfelt teachers understand that students learn best as
        individuals, not a mass of kids. With numerous years of experience, they
        know that teaching is a continous experience
      </SectText>
    </Sect>
  );
};

export default Teachers;
