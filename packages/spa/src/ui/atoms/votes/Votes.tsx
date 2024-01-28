import styled, { css, DefaultTheme } from "styled-components";

import { ReactComponent as RatingStarPicture } from "./ratingStar.svg";

const mediumScreen = ({ theme }: { theme: DefaultTheme }) =>
  theme.breakpoint.mediumScreen;
const smallScreen = ({ theme }: { theme: DefaultTheme }) =>
  theme.breakpoint.smallScreen;
const mobileMax = ({ theme }: { theme: DefaultTheme }) =>
  theme.breakpoint.mobileMax;
const oldIphone = ({ theme }: { theme: DefaultTheme }) =>
  theme.breakpoint.oldIphone;
const mobileMin = ({ theme }: { theme: DefaultTheme }) =>
  theme.breakpoint.mobileMin;

type VotesVariant = "DEFAULT" | "BACKDROP";

interface VotesProps {
  votes: number;
  rating: number;
  variant: VotesVariant;
}

export const Votes = ({ votes, rating, variant }: VotesProps) => (
  <VotesWrapper $variant={variant}>
    {votes === 0 ? (
      <NoVotesText>No votes yet</NoVotesText>
    ) : (
      <>
        <RatingWrapper $variant={variant}>
          <StyledLogo $variant={variant}>
            <RatingStarPicture />
          </StyledLogo>
          <Rating $variant={variant}>{rating}</Rating>
          <RatingScale $variant={variant}>/ 10</RatingScale>
        </RatingWrapper>
        <VotesCount $variant={variant}>
          {votes}&nbsp;vote{votes > 1 ? "s" : ""}
        </VotesCount>
      </>
    )}
  </VotesWrapper>
);

Votes.displayName = "Votes";
Votes.defaultProps = {
  votes: 0,
  rating: 0,
  backdrop: false,
};

const VotesWrapper = styled.div<{ $variant: VotesVariant }>`
  margin-top: auto;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${mobileMax}) {
    margin-top: 0px;
  }

  ${({ $variant }) =>
    $variant === 'BACKDROP' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        flex-direction: row;
        align-items: flex-end;
      }
    `}
`;

const RatingWrapper = styled.div<{ $variant: VotesVariant }>`
  margin-top: auto;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${mobileMax}) {
    margin-top: 0px;
  }

  ${({ $variant }) =>
    $variant === 'BACKDROP' &&
    css`
      display: flex;
      flex-direction: row;
      margin-bottom: 16px;
    `}
`;

const StyledLogo = styled.div<{ $variant: VotesVariant }>`
  width: 24px;
  margin-right: 8px;

  @media (max-width: ${mobileMax}) {
    width: 16px;
  }

  ${({ $variant }) =>
    $variant === 'BACKDROP' &&
    css`
      width: 40px;

      @media (max-width: ${mediumScreen}) {
        width: 16px;
      }
    `}
`;

const Rating = styled.span<{ $variant: VotesVariant }>`
  font-weight: 600;
  font-size: 22px;
  margin-right: 8px;

  @media (max-width: ${mediumScreen}) {
    font-size: 20px;
  }

  @media (max-width: ${smallScreen}) {
    font-size: 18px;
  }

  @media (max-width: ${mobileMax}) {
    font-size: 16px;
  }

  @media (max-width: ${oldIphone}) {
    font-size: 14px;
  }

  @media (max-width: ${mobileMin}) {
    font-size: 12px;
  }

  ${({ $variant }) =>
    $variant === 'BACKDROP' &&
    css`
      font-weight: 500;
      font-size: 30px;

      @media (max-width: ${mediumScreen}) {
        font-size: 26px;
      }

      @media (max-width: ${smallScreen}) {
        font-size: 22px;
      }

      @media (max-width: ${mobileMax}) {
        font-size: 18px;
      }

      @media (max-width: ${oldIphone}) {
        font-size: 12px;
      }

      @media (max-width: ${mobileMin}) {
        font-size: 10px;
      }
    `}
`;

const RatingScale = styled.span<{ $variant: VotesVariant }>`
  font-weight: 400;
  font-size: 14px;
  margin-right: 12px;

  @media (max-width: ${oldIphone}) {
    display: none;
  }

  ${({ $variant }) =>
    $variant === 'BACKDROP' &&
    css`
      font-size: 16px;

      @media (max-width: ${mobileMax}) {
        font-size: 10px;
      }

      @media (max-width: ${oldIphone}) {
        display: inherit;
      }
    `}
`;

const VotesCount = styled.span<{ $variant: VotesVariant }>`
  font-weight: 400;
  font-size: 14px;

  @media (max-width: ${mediumScreen}) {
    font-size: 13px;
  }

  @media (max-width: ${smallScreen}) {
    font-size: 12px;
  }

  @media (max-width: ${mobileMax}) {
    font-size: 11px;
  }

  @media (max-width: ${oldIphone}) {
    font-size: 10px;
  }

  @media (max-width: ${mobileMin}) {
    font-size: 9px;
  }

  ${({ $variant }) =>
    $variant === 'BACKDROP' &&
    css`
      font-weight: 500;
      font-size: 16px;

      @media (max-width: ${mobileMax}) {
        font-size: 10px;
        margin-bottom: 16px;
      }
    `}
`;

const NoVotesText = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkGrey};

  @media (max-width: ${mediumScreen}) {
    font-size: 15px;
  }

  @media (max-width: ${smallScreen}) {
    font-size: 14px;
  }

  @media (max-width: ${mobileMax}) {
    font-size: 13px;
  }

  @media (max-width: ${oldIphone}) {
    font-size: 12px;
  }

  @media (max-width: ${mobileMin}) {
    font-size: 11px;
  }
`;
