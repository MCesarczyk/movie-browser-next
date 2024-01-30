import clsx from "clsx";

import { ReactComponent as RatingStarPicture } from "./ratingStar.svg";

type VotesVariant = "DEFAULT" | "BACKDROP";

interface VotesProps {
  votes: number;
  rating: number;
  variant: VotesVariant;
}

export const Votes = ({ votes, rating, variant }: VotesProps) => (
  <div
    className={clsx(
      "mt-0 md:mt-auto flex items-end",
      variant === "BACKDROP" && "flex-row items-end md:flex-col md:items-start"
    )}
  >
    {votes === 0 ? (
      <div className="m-0 text-xs md:text-sm lg:text-base">No votes yet</div>
    ) : (
      <>
        <div
          className={clsx(
            "mt-0 flex items-end md:mt-auto",
            variant === "BACKDROP" && "flex-row mb-4"
          )}
        >
          <div
            className={clsx(
              "w-4 md:w-6 mr-2",
              variant === "BACKDROP" && "w-4 lg:w-10"
            )}
          >
            <RatingStarPicture />
          </div>
          <div
            className={clsx(
              "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold mr-2",
              variant === "BACKDROP" &&
                "text-xs md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            )}
          >
            {rating}
          </div>
          <div
            className={clsx(
              "font-normal text-sm mr-3 hidden sm:block",
              variant === "BACKDROP" && "block md:text-[10px] lg:text-base"
            )}
          >
            / 10
          </div>
        </div>
        <div
          className={clsx(
            "font-normal text-[10px] md:text-xs lg:text-sm",
            variant === "BACKDROP" && "text-[10px] mb-4 md:text-base"
          )}
        >
          {votes}&nbsp;vote{votes > 1 ? "s" : ""}
        </div>
      </>
    )}
  </div>
);

Votes.displayName = "Votes";
Votes.defaultProps = {
  votes: 0,
  rating: 0,
  backdrop: false,
};
