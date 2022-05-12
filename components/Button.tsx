import React from "react";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { PlusIcon } from "@heroicons/react/solid";

interface Props {
  children: React.ReactNode;
  href: string;
  filled?: true | undefined;
  chevron?: true | undefined;
  plus?: true | undefined;
  className?: string;
}

const Button: React.FC<Props> = ({
  children,
  href,
  filled,
  chevron,
  plus,
  className,
}) => {
  const createIcon = () => {
    const iconClass = "w-6 h-6";
    if (chevron) {
      return (
        <ChevronRightIcon
          className={
            iconClass + " group-hover:translate-x-3 transition-transform"
          }
        />
      );
    } else if (plus) {
      return (
        <PlusIcon
          className={
            iconClass +
            " ml-4 group-hover:rotate-180 group-hover:scale-110 transition-transform"
          }
        />
      );
    }
  };
  return (
    <Link href={href}>
      <a
        className={
          `${
            filled
              ? "bg-secondary text-white hover:bg-white hover:text-secondary"
              : "bg-white text-secondary hover:bg-secondary hover:text-white transition-colors"
          }` +
          " text-link font-semibold py-4 px-6 rounded-md border-2 border-secondary group " +
          className
        }
      >
        <div className="flex items-center">
          {children}
          <span>{createIcon()}</span>
        </div>
      </a>
    </Link>
  );
};

export default Button;
