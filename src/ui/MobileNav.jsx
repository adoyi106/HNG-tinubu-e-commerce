import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

//eslint-disable-next-line
function MobileNav({ toggle, isOpen }) {
  return (
    <button
      className=" flex gap-2 lg:hidden text-[#333] cursor-pointer z-[999]"
      onClick={toggle}
    >
      {!isOpen ? (
        <HiOutlineMenu
          name="menu-outline"
          className={`icon-mobile-nav text-6xl `}
        />
      ) : (
        <HiOutlineX
          name="close-outline"
          className="icon-mobile-nav text-6xl z-50"
        />
      )}
    </button>
  );
}

export default MobileNav;
