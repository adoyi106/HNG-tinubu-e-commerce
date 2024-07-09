// import { useState } from "react";
import NavLogo from "./NavLogo";
import Search from "./Search";
import UserActivity from "./UserActivity";

function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen((open) => !open);
  return (
    // <div className="header ">
    <div
      className="header flex flex-row items-center justify-between px-[4.8rem] h-[9.2rem] border-b border-[
#E2E2E2] overflow-hidden"
    >
      <NavLogo />
      <Search />
      <UserActivity />
    </div>
  );
}

export default Header;
