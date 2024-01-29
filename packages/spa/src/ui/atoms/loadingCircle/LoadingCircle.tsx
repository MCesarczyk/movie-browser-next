/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Ellipse } from "./ellipse.svg";

interface Props {
  color?: string;
}

export const LoadingCircle = ({ color = "current" }: Props) => (
  <div className="w-9 sm:w-16 md:w-24 h-9 sm:h-16 md:h-24 my-6 sm:my-16 md:my-24 mx-auto animate-spin">
    <Ellipse
      className={`w-9 sm:w-16 md:w-24 h-9 sm:h-16 md:h-24 text-${color}`}
    />
  </div>
);

LoadingCircle.displayName = "Loader";
