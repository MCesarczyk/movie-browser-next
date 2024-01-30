import { MouseEventHandler } from "react";
import errorIcon from "./error.svg";

interface FallbackProps {
  error?: Error;
  resetErrorBoundary: MouseEventHandler<HTMLButtonElement>;
}

export const Fallback = ({ error, resetErrorBoundary }: FallbackProps) => (
  <div className="flex flex-col items-center justify-center text-center absolute top-1/2 left-1/2 mr-[-50%] translate-x-[-50%] translate-y-[-50%]">
    <img src={errorIcon} alt="" />
    <h2 className="font-bold text-base mt-6 sm:text-2xl sm:mt-9 md:text-3xl md:mt-12 xl:text-4xl xl:mt-16">
      Oooops! Something went&nbsp;wrong...
    </h2>
    <p className="text-xs sm:text-base md:text-xl">
      {error?.message}
    </p>
    <button
      className="text-xs md:text-sm font-bold text-white bg-blue-800 decoration-0 flex flex-row items-center py-4 px-6 rounded-md hover:scale-105 hover:brightness-125 transition-all ease-out duration-500 active:scale-100 m-4"
      onClick={resetErrorBoundary}
    >
      Reload
    </button>
  </div>
);
