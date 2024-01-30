import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => (
  <div className="max-w-7xl my-0 mx-auto">{children}</div>
);
