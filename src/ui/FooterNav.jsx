import { Link } from "react-router-dom";

function FooterNav() {
  return (
    <ul className="flex  flex-col gap-8  justify-center text-[#EAE8E8] md:flex-row items-center lg:col-start-1  text-3xl mt-8 font-normal">
      <li>
        <Link className=" " to="/home">
          Home
        </Link>
      </li>
      <li>
        <Link className="" to="/products">
          Products
        </Link>
      </li>
    </ul>
  );
}

export default FooterNav;
