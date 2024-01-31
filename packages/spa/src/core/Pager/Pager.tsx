import { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

import { SEARCH_QUERY_PARAM_NAME } from "features/search/constants";
import { PreviousIcon } from "./PreviousIcon/PreviousIcon";
import { NextIcon } from "./NextIcon/NextIcon";
import { PagerButton } from "core/Pager/PagerButton";

interface PagerProps {
  property: string;
  totalPages: number;
}

export const Pager = ({ property, totalPages }: PagerProps) => {
  const { page } = useParams<{ page: string }>();
  let currentPage = page ? Number(page) : 1;

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(SEARCH_QUERY_PARAM_NAME);

  const navigate = useNavigate();
  const firstPageUrl = `${property}/1${
    query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""
  }`;
  totalPages && currentPage > totalPages && navigate(firstPageUrl);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.onresize = () => setWindowWidth(window.innerWidth);
  const mobileMax = 767;

  const checkIfPreviousIsDisabled = () => (+currentPage === 1 ? true : false);
  const checkIfNextIsDisabled = () =>
    totalPages && +currentPage === +totalPages ? true : false;

  return (
    <div className="flex items-center justify-center my-8 md:my-10 mx-auto">
      <PagerButton disabled={checkIfPreviousIsDisabled()} to={firstPageUrl}>
        <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
        {windowWidth < mobileMax ? (
          <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
        ) : (
          "First"
        )}
      </PagerButton>
      <PagerButton
        to={`${property}/${+currentPage === 1 ? 1 : +currentPage - 1}${
          query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""
        }`}
        disabled={checkIfPreviousIsDisabled()}
      >
        <PreviousIcon disabled={checkIfPreviousIsDisabled()} />
        {windowWidth < mobileMax ? "" : "Previous"}
      </PagerButton>

      <span className="text-[10px] md:text-base text-slate-900 self-center my-0 mx-[2px] md:mx-2">
        Page
      </span>
      <span className="text-[10px] md:text-base my-0 mx-[2px] md:mx-2 font-bold text-slate-800">
        {currentPage}
      </span>
      <span className="text-[10px] md:text-base text-slate-900 self-center my-0 mx-[2px] md:mx-2">
        of
      </span>
      <span className="text-[10px] md:text-base my-0 mx-[2px] md:mx-2 font-bold text-slate-800">
        {totalPages}
      </span>

      <PagerButton
        to={`${property}/${
          totalPages && +currentPage === +totalPages
            ? +currentPage
            : +currentPage + 1
        }${query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""}`}
        disabled={checkIfNextIsDisabled()}
      >
        {windowWidth < mobileMax ? "" : "Next"}
        <NextIcon disabled={checkIfNextIsDisabled()} />
      </PagerButton>
      <PagerButton
        to={`${property}/${totalPages}${
          query ? `?${SEARCH_QUERY_PARAM_NAME}=${query}` : ""
        }`}
        disabled={checkIfNextIsDisabled()}
      >
        {windowWidth < mobileMax ? (
          <NextIcon disabled={checkIfNextIsDisabled()} />
        ) : (
          "Last"
        )}
        <NextIcon disabled={checkIfNextIsDisabled()} />
      </PagerButton>
    </div>
  );
};
