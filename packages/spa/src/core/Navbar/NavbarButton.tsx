import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  path: string;
  title: string;
}

export const NavbarButton = ({ path, title }: NavbarProps) => (
  <Item>
    <StyledNavLink to={path}>{title}</StyledNavLink>
  </Item>
);

export const Item = ({ children }: { children: ReactNode }) => (
  <li className="uppercase decoration-0 m-[2px] md:m-0">{children}</li>
);

export const StyledNavLink = ({
  children,
  to,
}: {
  children: ReactNode;
  to: string;
}) => (
  <NavLink
    to={to}
    className="text-white decoration-0 border-transparent border-[1px] rounded-full hover:border-slate-500 focus:border-slate-500 focus:outline-none active:border-white text-xs p-2 md:p-3 md:text-sm"
  >
    {children}
  </NavLink>
);
