import noResults from "./noResults.svg";
import { Header } from "ui/atoms/header";
import { Wrapper } from "ui/atoms/wrapper";

interface NoResultsPageProps {
  query: string;
}

export const NoResultsPage = ({ query }: NoResultsPageProps) => (
  <Wrapper>
    <Header>
      {query
        ? `Sorry, there are no results for "${query}"`
        : "Sorry, the page not found..."}
    </Header>
    {
      <img
        className="w-36 h-24 sm:w-72 sm:h-52 md:w-[668px] md:h-[508px] mt-12 my-0 mx-auto"
        src={noResults}
        alt=""
      />
    }
  </Wrapper>
);
