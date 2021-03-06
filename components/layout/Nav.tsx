import React, { useState } from "react";
import NavLink from "../NavLink";
import { useRouter } from "next/router";
import Button from "../Button";
import Link from "next/link";

interface Props {}

const Nav: React.FC<Props> = ({}) => {
  const [isNavOn, setIsNavOn] = useState(false);

  const router = useRouter();
  const currPath = router.pathname;

  return (
    <div className=" flex justify-between overflow-x-hidden pt-2 fixed top-0 left-0 right-0 bg-white z-10 container">
      <div className="text-primary text-logo-nav font-semibold  md:flex-1 md:flex md:items-center lg:text-lg-logo-nav">
        <Link href={"/home"}>
          <a>Inter-A</a>
        </Link>
      </div>
      <div
        className={
          `${isNavOn ? " " : "-translate-y-[110vh]"}` +
          " transition-transform fixed inset-0  flex flex-col items-center justify-between py-12 bg-white bg-opacity-70 backdrop-blur-sm md:translate-y-0 md:flex-row md:backdrop-blur-none md:bg-opacity-100 md:static md:flex-[2] md:py-0 "
        }
      >
        <ul className="flex-[1] flex flex-col justify-between items-center md:flex-row ">
          <li>
            <NavLink href="/home" currPath={currPath}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/about" currPath={currPath}>
              Who are We?
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact" currPath={currPath}>
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className="flex-[1] flex flex-col justify-end md:flex-row">
          <Button href="/apply" filled plus>
            Apply
          </Button>
        </div>
      </div>
      <div
        className="flex flex-col gap-[5px] z-10 origin-right scale-75 md:hidden"
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
