import Cart from "./Cart";
import MainNav from "./MainNav";
import Search from "./Search";

//eslint-disable-next-line
function MobileMenu({ toggle }) {
  return (
    <div className="fixed top-0 left-0 w-full h-screen backdrop-blur-lg bg-white flex flex-col items-start p-8 mt-36">
      <nav className="flex flex-col gap-12">
        <MainNav toggle={toggle} />
        <Search toggle={toggle} />
        <Cart toggle={toggle} />
      </nav>
    </div>
  );
}

export default MobileMenu;
