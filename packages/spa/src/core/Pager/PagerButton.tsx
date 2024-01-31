import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface PagerProps {
  to: string;
  disabled: boolean;
  children: ReactNode;
}

export const PagerButton = ({ to, disabled, children }: PagerProps) => (
  <Link
    className={clsx(
      "decoration-0 py-2 px-3 md:px-4 rounded-md bg-slate-300 my-0 mx-2 md:mx-3 text-sm text-slate-900 flex items-center",
      disabled && "bg-slate-300 text-slate-400 cursor-default"
    )}
    {...{ to }}
  >
    {children}
  </Link>
);
