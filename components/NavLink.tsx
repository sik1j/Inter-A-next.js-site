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
              ? "font-semibold text-text-dark border-b-2 border-b-primary"
              : "text-text-grey font-medium"
          }` + " text-link"
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default NavLink;
