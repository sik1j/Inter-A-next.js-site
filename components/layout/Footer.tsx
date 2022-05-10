import React from "react";
import Button from "../Button";
import Sect from "../Sect";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
  return (
    <Sect className={`pb-8`}>
      <span className="absolute inset-0 bottom-auto -top-10 bg-text-grey h-1 w-[90vw] mx-auto" />
      <div className="flex gap-[7.5vw]">
        <div className="flex flex-col gap-5 flex-1 ">
          <div className="text-primary font-semibold text-logo-ftr">
            DigitUX
          </div>
          <div className="text-ftr text-text-dark leading-6">
            DigitUx is a Digital agencay that create User centred Product that
            help her client to evolve
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="font-semibold text-md text-text-dark">
            Get in touch with Us
          </div>
          <div className="text-ftr text-text-dark leading-6">
            Need Answers? Need help ? Just send us a message
          </div>
          <Button href="/contact" chevron className="flex justify-center w-fit">
            Contact Us
          </Button>
        </div>
      </div>
    </Sect>
  );
};

export default Footer;
