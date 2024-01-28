/// <reference types="vite-plugin-svgr/client" />
import styled from "styled-components";
import { ReactComponent as Ellipse } from "./ellipse.svg";

interface Props {
  color?: string;
  cycleTime?: number;
}

export const LoadingCircle = ({ color, cycleTime }: Props) => (
  <Wrapper {...{ color, cycleTime }}>
    <LoadingIcon />
  </Wrapper>
);

LoadingCircle.displayName = "Loader";
LoadingCircle.defaultProps = {
  color: "#000",
  cycleTime: 1,
};

const Wrapper = styled.div<{ color?: string; cycleTime?: number }>`
  color: ${({ color }) => color};
  width: 91px;
  height: 91px;
  margin: 120px auto;
  animation: ${({ cycleTime }) => `spin ${cycleTime || 1}s linear infinite`};

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 66px;
    height: 66px;
    margin: 66px auto;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 35px;
    height: 35px;
    margin: 24px auto;
  }
`;

const LoadingIcon = styled(Ellipse)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 66px;
    height: 66px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMin}px) {
    width: 35px;
    height: 35px;
  }
`;
