import Logo from "./Logo";
import MainNav from "./MainNav";

function NavLogo() {
  return (
    <div className="flex gap-[4rem] items-center justify-between">
      <Logo />
      <MainNav />
    </div>
  );
}

export default NavLogo;
