import { ReactComponent as Next } from "./next.svg";
import clsx from "clsx";

interface NextIconProps {
  disabled: boolean;
}

export const NextIcon = ({ disabled }: NextIconProps) => (
  <Next
    className={clsx(
      "my-0 mx-[2px] w-1 h-2 md:ml-2 text-blue-500",
      disabled && "text-slate-700"
    )}
  />
);
