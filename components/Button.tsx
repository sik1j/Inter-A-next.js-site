import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  filled?: true | undefined;
}

const Button: React.FC<Props> = ({ children, href, filled }) => {
  return (
    <Link href={href}>
      <a
        className={
          `` +
          " text-link font-semibold text-white bg-secondary py-4 px-6 rounded-md"
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
