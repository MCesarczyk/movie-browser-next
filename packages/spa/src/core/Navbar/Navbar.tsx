import { SearchForm } from "features/search/SearchForm";
import { NavbarButton } from "core/Navbar/NavbarButton";
import { Header } from "./Header";

interface NavbarProps {
  moviesPath: string;
  peoplePath: string;
}

export const Navbar = ({ moviesPath, peoplePath }: NavbarProps) => {
  return (
    <div className="text-white bg-black h-24 p-6 w-full min-h-40">
      <nav className="flex flex-col xl:flex-row items-center justify-center xl:justify-between w-full xl:max-w-7xl my-0 mx-auto gap-6 xl:gap-20">
        <div className="flex items-center justify-start w-full gap-5 md:my-0 md:mx-6 xl:gap-20">
          <Header />
          <ul className="flex list-none m-0 pl-0 items-center">
            <NavbarButton path={moviesPath} title="Movies" />
            <NavbarButton path={peoplePath} title="People" />
          </ul>
        </div>
        <SearchForm />
      </nav>
    </div>
  );
};
