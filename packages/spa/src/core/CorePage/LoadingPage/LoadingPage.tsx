import { Loader } from "ui/atoms";
import { Header } from "ui/atoms/header";
import { Wrapper } from "ui/atoms/wrapper";

interface LoadingPageProps {
    message: string;
    query: string | null | undefined;
};

export const LoadingPage = ({ message, query }: LoadingPageProps) => (
    <Wrapper>
        <Header>
            {query ? `Search results for "${query}"` : message}
        </Header>
        <Loader />
    </Wrapper>
);
