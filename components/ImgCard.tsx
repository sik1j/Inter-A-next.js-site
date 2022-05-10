import React, { useState } from "react";
import Image from "next/image";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

interface Props {
  name: string;
  experience: string;
  imageUrl: string;
  setPrevImage: () => void;
  setNextImage: () => void;
}

const ImgCard: React.FC<Props> = ({
  name,
  experience,
  imageUrl,
  setNextImage,
  setPrevImage,
}) => {
  return (
    <div className=" relative">
      <div className="flex justify-center -z-10">
        <Image src={imageUrl} height={350} width={350} objectFit="cover" />
      </div>
      <div className="space-y-3 flex flex-col items-center mt-3">
        <div className="font-bold text-md ">{name}</div>
        <div className="text-text-gray ">{experience + " of experience"}</div>
        <div className="flex gap-14 justify-center pt-6">
          <ArrowCircleLeftIcon
            className="w-16 text-primary stroke-1"
            onClick={() => setPrevImage()}
          />
          <ArrowCircleRightIcon
            className="w-16 text-primary stroke-1"
            onClick={() => setNextImage()}
          />
        </div>
      </div>
    </div>
  );
};

export default ImgCard;
