import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  currPath: string;
}

const NavLink: React.FC<Props> = ({ href, children, currPath }) => {
  const isLinkSelected = currPath == href;
  return (
    <Link href={href}>
      <a
        className={
          `${
            isLinkSelected
              ? "font-semibold text-text-dark before:bg-primary"
              : "text-text-grey font-medium before:bg-gray-200"
          }` +
          " text-link lg:text-lg-link  relative hover:before:bg-primary before:content-[''] before:absolute before:left-0 before:bottom-[-2px] before:w-8 before:h-[2px] "
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
