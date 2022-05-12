import React, { useState } from "react";
import Sect from "../Sect";
import SectHeading from "../SectHeading";
import SectHeading2 from "../SectHeading2";
import SectText from "../SectText";
import ImgCard from "../ImgCard";

interface Props {}

const Teachers: React.FC<Props> = ({}) => {
  const [imageNum, setImageNum] = useState(0);
  const numPrev = (num: number) => {
    if (num == 0) {
      return 4;
    }
    return num - 1;
  };
  const setPrevImage = () => {
    setImageNum(numPrev(imageNum));
  };
  const numNext = (num: number) => {
    if (num == 4) {
      return 0;
    }
    return num + 1;
  };
  const setNextImage = () => {
    setImageNum(numNext(imageNum));
  };
  const imgCardObj = [
    {
      name: "Roger Blenman",
      experience: "5 years",
      // imageNum: 0,
    },
    {
      name: "Anthony Jay",
      experience: "12 years",
      // imageNum: 1,
    },
    {
      name: "Roger Roger",
      experience: "12 years",
      // imageNum: 2,
    },
    {
      name: "Destroyer of Worlds",
      experience: "5 years",
      // imageNum: 3,
    },
    {
      name: "Blender of Souls",
      experience: "3 years",
      // imageNum: 4,
    },
  ];
  let imbObjInd = Math.abs(imageNum);
  return (
    <Sect>
      <div className="lg:flex">
        <div className="lg:flex-1">
          <SectHeading className="">The Teachers Behind Inter-A</SectHeading>
          <SectHeading2 className="">
            A team of passionate educators helping students learn as individuals
          </SectHeading2>
          <br />
          <SectText>
            Our team of heartfelt teachers understand that students learn best
            as individuals, not a mass of kids. With numerous years of
            experience, they know that teaching is a continous experience
          </SectText>
        </div>
        <div className="space-y-4 lg:flex-1 lg:space-y-0">
          <br className="lg:hidden" />
          <ImgCard
            name={imgCardObj[imbObjInd].name}
            experience={imgCardObj[imbObjInd].experience}
            setNextImage={setNextImage}
            setPrevImage={setPrevImage}
            imageUrl={`/imgs/${imbObjInd}.jpg`}
          />
        </div>
      </div>
    </Sect>
  );
};

export default Teachers;
