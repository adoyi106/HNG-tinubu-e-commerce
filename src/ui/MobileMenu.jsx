import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-start p-8">
      <ul className="flex flex-col gap-4">
        <li>
          <Link className="main-nav-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="main-nav-links" to="/products">
            Products
          </Link>
        </li>
        <li>
          <Link className="main-nav-links" to="/contacts">
            Contact Us
          </Link>
        </li>
        <li>
          <div className="flex items-center gap-4">
            <button>
              <HiOutlineSearch className="text-4xl text-[#7D7D7D]" />
            </button>
            <input
              className="bg-transparent text-2xl outline-none border-none w-full"
              type="text"
              placeholder="Search items.."
              autoComplete="off"
            />
          </div>
        </li>
        <li>
          <Link className="main-nav-links" to="/cart">
            Cart
          </Link>
        </li>
        <li>
          <button className="text-3xl font-medium text-[#CC5500] p-[1.2rem] border-2 border-[#CC5500]">
            Sign up
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
