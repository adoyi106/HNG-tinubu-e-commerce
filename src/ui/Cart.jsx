import { HiOutlineShoppingCart } from "react-icons/hi";

function Cart() {
  return (
    <div className="flex items-center gap-4">
      <HiOutlineShoppingCart className="text-4xl text-[#5E5E5E] font-normal" />
      <span className="text-2xl text-[#5E5E5E] hidden lg:block">Cart</span>
    </div>
  );
}

export default Cart;
