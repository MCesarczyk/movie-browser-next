import { NoResultsLogo } from "./styled";
import noResults from "./noResults.svg";
import { Header } from "ui/atoms/header";
import { Wrapper } from "ui/atoms/wrapper";


interface NoResultsPageProps {
    query: string;
};

const NoResultsPage = ({ query }: NoResultsPageProps) => (
    <Wrapper>
        <Header>
            {query ?
                `Sorry, there are no results for "${query}"` :
                "Sorry, the page not found..."
            }
        </Header>
        {<NoResultsLogo src={noResults} alt="" />}
    </Wrapper>
);

export default NoResultsPage;
