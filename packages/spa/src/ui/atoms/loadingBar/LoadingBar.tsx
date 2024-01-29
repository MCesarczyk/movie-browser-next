import styled from "styled-components";

export const LoadingBar = () => (
  <div className="bg-black h-2 flex z-[2000] mt-[-8px] animate-slide">
    <div className="bg-blue-800 h-full w-32"/>
  </div>
);

const LoadingBarBody = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  height: 8px;
  display: flex;
  z-index: 2000;
  margin-top: -8px;
`;

const LoadingBarSlider = styled.div`
  background-color: ${({ theme }) => theme.color.scienceBlue};
  height: 100%;
  width: 120px;
  animation: slide 1s linear infinite;

  @keyframes slide {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: calc(100% - 120px);
    }
  }
`;
