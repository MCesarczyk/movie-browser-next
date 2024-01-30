import clsx from "clsx";
import { ReactNode } from "react";

import { Header } from "ui/atoms/header";
import { Wrapper } from "ui/atoms/wrapper";

interface SectionProps {
  title: string;
  children?: ReactNode;
  isStale?: boolean;
}

const Section = ({ title, children, isStale }: SectionProps) => {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <div
        className={clsx(
          "flex flex-wrap justify-center gap-5 lg:gap-6",
          isStale && "brightness-90"
        )}
      >
        {children}
      </div>
    </Wrapper>
  );
};

export default Section;
