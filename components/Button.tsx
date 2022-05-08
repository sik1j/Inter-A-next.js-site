import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  filled?: true | undefined;
  className?: string;
}

const Button: React.FC<Props> = ({ children, href, filled, className }) => {
  return (
    <Link href={href}>
      <a
        className={
          `${filled ? "bg-secondary text-white" : "bg-white text-secondary"}` +
          " text-link font-semibold py-4 px-6 rounded-md border-2 border-secondary " +
          className
        }
      >
        {children}
      </a>
    </Link>
  );
};

export default Button;
