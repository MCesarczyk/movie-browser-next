import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <h2 className="font-bold py-0 px-4 text text-lg sm:text-2xl md:text-3xl xl:text-4xl mt-6 sm:mt-8 md:mt-12 xl:mt-16 mb-3 sm:mb-4 md:mb-6 xl:mb-8">
    {children}
  </h2>
);
