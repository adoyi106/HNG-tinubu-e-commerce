import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";

//eslint-disable-next-line
function Cart({ toggle }) {
  return (
    <Link
      to="/cart"
      onClick={() => toggle()}
      className="flex items-center gap-4"
    >
      <HiOutlineShoppingCart className="text-4xl text-[#5E5E5E] font-normal" />
      <span className="text-3xl lg:text-2xl text-[#5E5E5E] block">Cart</span>
    </Link>
  );
}

export default Cart;
