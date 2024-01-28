import { ReactNode } from "react";
import styled from "styled-components";

import { Header } from "ui/atoms/header";
import { Wrapper } from "ui/atoms/wrapper";

interface SectionProps {
    title: string;
    children?: ReactNode;
    isStale?: boolean;
};

const Section = ({ title, children, isStale }: SectionProps) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <SectionInnerContainer isStale={!!isStale}>
                {children}
            </SectionInnerContainer>
        </Wrapper>
    );
};

export default Section;

const SectionInnerContainer = styled.div<{ isStale: boolean }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    filter: ${({ isStale }) => isStale ? 'brightness(0.9)' : 'none'};
    gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mediumScreen}) {
        gap: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.smallScreen}) {
        gap: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        gap: 18px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.oldIphone}) {
        gap: 16px;
    }
`;
