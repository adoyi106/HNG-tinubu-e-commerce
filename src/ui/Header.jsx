import { useState } from "react";

import Cart from "./Cart";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";
import Search from "./Search";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((open) => !open);
  return (
    <header className="bg-white shadow-md">
      <div className="container flex flex-row items-center justify-between px-[4.8rem] h-[9.2rem] border-b border-[#E2E2E2] overflow-hidden">
        <Logo />
        <nav className="hidden lg:flex lg:flex-row items-center justify-evenly gap-[15rem] ">
          <MainNav />
          <Search />
          <Cart />
        </nav>

        {/* mobile naviation */}
        <div className="lg:hidden">
          <MobileNav isOpen={isOpen} toggle={toggle} />
        </div>
      </div>
      {isOpen && <MobileMenu toggle={toggle} />}
    </header>
  );
}

export default Header;
