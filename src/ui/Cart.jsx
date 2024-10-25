import { HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useCart } from "../features/cart/useCart";

//eslint-disable-next-line
function Cart({ toggle }) {
  const { cart } = useCart();

  const cartLength = cart?.length;

  return (
    // <div className="flex flex-col sm:flex-row gap-12 relative">
    <div className="flex flex-col sm:flex-row gap-12 items-left lg:items-center justify-center">
      <NavLink
        to="/cart"
        // onClick={() => toggle()}
        className="relative"
        // className="flex items-center gap-4"
      >
        <HiOutlineShoppingCart className="text-4xl text-[#5E5E5E] font-normal" />
        {/* <span className="text-3xl lg:text-2xl text-[#5E5E5E] block">Cart</span> */}
        <span className="absolute text-xl text-center font-bold text-white py-[0.3rem] px-[1rem] bg-[#CC5500] left-4 bottom-[1rem] lg:bottom-6 rounded-[2.8rem]">
          {cartLength}
        </span>
      </NavLink>
      <NavLink to="/cart" className="signup">
        Signup/Login
      </NavLink>
    </div>
  );
}

export default Cart;
