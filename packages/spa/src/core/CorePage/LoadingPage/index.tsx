import { Header } from "common/Header";
import { Wrapper } from "common/Wrapper";
import { Loader } from "ui/atoms";

interface LoadingPageProps {
    message: string;
    query: string | null | undefined;
};

const LoadingPage = ({ message, query }: LoadingPageProps) => (
    <Wrapper>
        <Header>
            {query ? `Search results for "${query}"` : message}
        </Header>
        <Loader />
    </Wrapper>
);

export default LoadingPage;
