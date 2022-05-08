import React, { useState } from "react";
import NavLink from "./NavLink";
import { useRouter } from "next/router";
import Button from "./Button";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
  const [isNavOn, setIsNavOn] = useState(false);
  const router = useRouter();

  const currPath = router.pathname;
  return (
    <div className=" flex justify-between overflow-x-hidden px-[5%] py-2 ">
      <div className="text-primary">DigitUX</div>
      <div
        className={
          `${isNavOn ? " " : "-translate-y-[100vh]"}` +
          " transition-transform absolute inset-0  flex flex-col items-center justify-between py-12 bg-white bg-opacity-70 backdrop-blur-sm"
        }
      >
        <ul className="flex-grow-[1] flex flex-col justify-between">
          <li>
            <NavLink href="/" currPath={currPath}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" currPath={currPath}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="/next" currPath={currPath}>
              Next
            </NavLink>
          </li>
        </ul>
        <div className="flex-grow-[1] flex flex-col justify-end">
          <Button href="/apply">Get a Quote</Button>
        </div>
      </div>
      <div
        className="flex flex-col gap-[5px] z-10 origin-right scale-75"
        onClick={() => setIsNavOn(!isNavOn)}
      >
        <div className="w-[25px] h-[3px] bg-black" />
        <div className="w-[15px] h-[3px] bg-black ml-auto" />
        <div className="w-[25px] h-[3px] bg-black" />
      </div>
    </div>
  );
};

export default Nav;
